"use client"

import { useState } from "react"
import SearchBimtek from "@/app/components/bimtek/SearchBimtek"
import clsx from "clsx"
import QrScanner from "@/app/components/ui/QR/QrScanner"

type Bimtek = {
    id: number
    title: string
    date: string // yyyy-mm-dd
}

export default function Page() {
    const [open, setOpen] = useState(false)
    const [scan, setScan] = useState(false)
    const [search, setSearch] = useState("")
    const [selectedDate, setSelectedDate] = useState("")

    const user = {
        name: "Muhammad Asandy Putra",
        email: "asandy@email.com",
        instansi: "Dinas Kominfo Banjarbaru",
    }

    const [form, setForm] = useState({
        name: user.name,
        email: user.email,
        instansi: user.instansi,
    })

    const [editable, setEditable] = useState({
        name: false,
        email: false,
        instansi: false,
    })

    const handleChange = (key: string, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }))
    }

    const enableEdit = (key: string) => {
        setEditable((prev) => ({ ...prev, [key]: true }))
    }



    const bimtekList: Bimtek[] = [
        {
            id: 1,
            title: "Bimtek Digitalisasi Industri",
            date: "2026-02-12",
        },
        {
            id: 2,
            title: "Bimtek Keamanan Informasi",
            date: "2026-02-15",
        },
    ]

    const filteredBimtek = bimtekList.filter((item) => {
        const matchTitle = item.title
            .toLowerCase()
            .includes(search.toLowerCase())

        const matchDate = selectedDate
            ? item.date === selectedDate
            : true

        return matchTitle && matchDate
    })

    return (
        <div className="space-y-6">
            {/* Heading */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800">
                    Presensi Bimtek 📋
                </h2>
                <p className="text-sm text-gray-600">
                    Pilih bimtek dan lakukan presensi dengan scan QR Code
                </p>
            </div>

            {/* Filter Section */}
            <div className="flex flex-col md:flex-row gap-3">
                <SearchBimtek value={search} onChange={setSearch} />

                <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className={clsx("px-4 py-2",
                        "border border-black/30",
                        "rounded-lg",
                        "text-sm",
                        "text-gray-800",
                        "bg-gray-50",
                        "focus:outline-none",
                        "focus:ring-2",
                        "focus:ring-green-500")}
                />

            </div>

            {/* List Card Bimtek */}
            <div className="space-y-4">
                {filteredBimtek.length === 0 && (
                    <p className="text-sm text-gray-500">
                        Tidak ada bimtek ditemukan
                    </p>
                )}

                {filteredBimtek.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white border rounded-xl p-5 shadow-sm flex items-center justify-between"
                    >
                        <div>
                            <h3 className="font-semibold text-gray-800">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {item.date}
                            </p>
                        </div>

                        <button
                            onClick={() => setOpen(true)}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition"
                        >
                            Presensi
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal Presensi */}
            {open && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl w-full max-w-md p-6 space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800">
                            Konfirmasi Presensi
                        </h4>

                        {!scan ? (
                            <>
                                <div className="space-y-3">
                                    {/* Nama */}
                                    <div>
                                        <label className="text-sm text-gray-600">Nama</label>
                                        <div className="relative mt-1">
                                            <input
                                                type="text"
                                                value={form.name}
                                                readOnly={!editable.name}
                                                onChange={(e) =>
                                                    handleChange("name", e.target.value)
                                                }
                                                className={clsx(
                                                    "w-full px-3 py-2 pr-10 border rounded-lg text-sm",
                                                    "border-black/30",
                                                    editable.name
                                                        ? "bg-white text-gray-800"
                                                        : "bg-gray-100 text-gray-600",
                                                    "focus:outline-none focus:ring-2 focus:ring-green-500"
                                                )}
                                            />
                                            {!editable.name && (
                                                <button
                                                    type="button"
                                                    onClick={() => enableEdit("name")}
                                                    className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-gray-600"
                                                >
                                                    ✏️
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="text-sm text-gray-600">Email</label>
                                        <div className="relative mt-1">
                                            <input
                                                type="email"
                                                value={form.email}
                                                readOnly={!editable.email}
                                                onChange={(e) =>
                                                    handleChange("email", e.target.value)
                                                }
                                                className={clsx(
                                                    "w-full px-3 py-2 pr-10 border rounded-lg text-sm",
                                                    "border-black/30",
                                                    editable.email
                                                        ? "bg-white text-gray-800"
                                                        : "bg-gray-100 text-gray-600",
                                                    "focus:outline-none focus:ring-2 focus:ring-green-500"
                                                )}
                                            />
                                            {!editable.email && (
                                                <button
                                                    type="button"
                                                    onClick={() => enableEdit("email")}
                                                    className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-gray-600"
                                                >
                                                    ✏️
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Instansi */}
                                    <div>
                                        <label className="text-sm text-gray-600">
                                            Instansi / Usaha
                                        </label>
                                        <div className="relative mt-1">
                                            <input
                                                type="text"
                                                value={form.instansi}
                                                readOnly={!editable.instansi}
                                                onChange={(e) =>
                                                    handleChange("instansi", e.target.value)
                                                }
                                                className={clsx(
                                                    "w-full px-3 py-2 pr-10 border rounded-lg text-sm",
                                                    "border-black/30",
                                                    editable.instansi
                                                        ? "bg-white text-gray-800"
                                                        : "bg-gray-100 text-gray-600",
                                                    "focus:outline-none focus:ring-2 focus:ring-green-500"
                                                )}
                                            />
                                            {!editable.instansi && (
                                                <button
                                                    type="button"
                                                    onClick={() => enableEdit("instansi")}
                                                    className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-gray-600"
                                                >
                                                    ✏️
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end gap-2 pt-4">
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        onClick={() => setScan(true)}
                                        className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm"
                                    >
                                        Lanjut Scan QR
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <QrScanner
                                    onSuccess={async (result) => {
                                        console.log("Hasil QR:", result)
                                        // await kirim ke backend kalau perlu
                                    }}
                                    onFinish={() => {
                                        // Delay sedikit supaya stopCamera selesai dulu
                                        setTimeout(() => {
                                            setScan(false)
                                            setOpen(false)
                                        })
                                    }}
                                />


                            </>
                        )}
                    </div>
                </div>
            )}

        </div>
    )
}
