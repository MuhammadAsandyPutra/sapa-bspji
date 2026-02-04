"use client"

import { useEffect, useRef } from "react"
import { Html5Qrcode } from "html5-qrcode"

type QrScannerProps = {
    onFinish: () => void
    onSuccess?: (decodedText: string) => void
}

export default function QrScanner({ onFinish, onSuccess }: QrScannerProps) {
    const qrCodeRef = useRef<Html5Qrcode | null>(null)
    const startedRef = useRef(false)

    useEffect(() => {
        if (startedRef.current) return
        startedRef.current = true

        const qrCode = new Html5Qrcode("qr-reader")
        qrCodeRef.current = qrCode

        requestAnimationFrame(() => {
            qrCode
                .start(
                    { facingMode: "environment" },
                    {
                        fps: 10,
                        qrbox: { width: 250, height: 250 },
                        disableFlip: true,
                    },
                    (decodedText) => {
                        onSuccess?.(decodedText)
                        handleStop(true)
                    },
                    () => { }
                )
                .catch((err) => {
                    console.error("Camera error:", err)
                })
        })

        return () => {
            handleStop(false)
            startedRef.current = false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleStop = async (closeModal: boolean) => {
        const qr = qrCodeRef.current
        qrCodeRef.current = null

        try {
            await qr?.stop()
        } catch {
            // ignore
        }

        if (closeModal) {
            onFinish()
        }
    }

    return (
        <div className="space-y-4">
            <p className="text-sm text-gray-600 text-center">
                Arahkan kamera ke QR Code yang ditampilkan panitia
            </p>

            {/* 🔥 INI SEKARANG AKAN MUNCUL */}
            <div
                id="qr-reader"
                className="w-full h-64 rounded-lg overflow-hidden border bg-black"
            />

            <div className="flex justify-end pt-4">
                <button
                    onClick={() => handleStop(true)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm"
                >
                    Batal
                </button>
            </div>
        </div>
    )
}
