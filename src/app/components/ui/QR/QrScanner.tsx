"use client"

import { useEffect, useRef } from "react"
import { Html5Qrcode } from "html5-qrcode"
import toast from "react-hot-toast"

type QrScannerProps = {
    onFinish: () => void
    onSuccess?: (decodedText: string) => Promise<void> | void
}

export default function QrScanner({
    onFinish,
    onSuccess,
}: QrScannerProps) {

    const qrRef = useRef<Html5Qrcode | null>(null)
    const streamRef = useRef<MediaStream | null>(null)
    const scannedRef = useRef(false)

    useEffect(() => {
        let isMounted = true

        const initScanner = async () => {
            try {
                const cameras = await Html5Qrcode.getCameras()
                if (!cameras.length) {
                    toast.error("Kamera tidak ditemukan")
                    return
                }

                const cameraId = cameras[0].id

                const qr = new Html5Qrcode("qr-reader")
                qrRef.current = qr

                await qr.start(
                    cameraId,
                    {
                        fps: 10,
                        qrbox: 250,
                    },
                    async (decodedText) => {
                        if (scannedRef.current) return
                        scannedRef.current = true

                        const loading = toast.loading("Memproses...")

                        try {
                            await onSuccess?.(decodedText)

                            toast.success("Presensi berhasil!", { id: loading })

                            await stopCamera()

                            if (isMounted) onFinish()

                        } catch {
                            toast.error("Presensi gagal!", { id: loading })
                            scannedRef.current = false
                        }
                    },
                    () => {

                    }
                )

                const video = document.querySelector("#qr-reader video") as HTMLVideoElement
                streamRef.current = video?.srcObject as MediaStream

            } catch (err) {
                toast.error("Gagal mengakses kamera")
            }
        }

        initScanner()

        return () => {
            isMounted = false
            stopCamera()
        }

    }, [])

    const stopCamera = async () => {
        try {
            if (qrRef.current) {
                try {
                    await qrRef.current.stop()
                } catch { }
                try {
                    await qrRef.current.clear()
                } catch { }
                qrRef.current = null
            }

            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => {
                    track.stop()
                })
                streamRef.current = null
            }

            const container = document.getElementById("qr-reader")
            if (container) container.innerHTML = ""

        } catch (err) {
            console.warn("Stop error:", err)
        }
    }

    const handleCancel = async () => {
        await stopCamera()

        setTimeout(() => {
            onFinish()
        }, 0)

    }

    return (
        <div className="space-y-4">
            <p className="text-sm text-gray-600 text-center">
                Arahkan kamera ke QR Code
            </p>

            <div
                id="qr-reader"
                className="w-full h-64 rounded-lg overflow-hidden border bg-black"
            />

            <div className="flex justify-end pt-4">
                <button
                    onClick={handleCancel}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm"
                >
                    Batal
                </button>
            </div>
        </div>
    )
}
