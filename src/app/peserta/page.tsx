export default function PesertaDashboard() {
    return (
        <div className="space-y-6">
            {/* Heading */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800">
                    Selamat Datang 👋
                </h2>
                <p className="text-sm text-gray-600">
                    Berikut ringkasan aktivitas bimtek yang kamu ikuti
                </p>
            </div>

            {/* Statistik */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow p-5">
                    <p className="text-sm text-gray-500">Total Bimtek</p>
                    <p className="text-3xl font-bold text-blue-700 mt-2">5</p>
                </div>

                <div className="bg-white rounded-lg shadow p-5">
                    <p className="text-sm text-gray-500">Sertifikat</p>
                    <p className="text-3xl font-bold text-green-600 mt-2">3</p>
                </div>

                <div className="bg-white rounded-lg shadow p-5">
                    <p className="text-sm text-gray-500">Presensi Aktif</p>
                    <p className="text-3xl font-bold text-orange-500 mt-2">1</p>
                </div>
            </div>

            {/* Riwayat Bimtek */}
            <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b">
                    <h3 className="font-semibold text-gray-700">
                        Riwayat Bimtek
                    </h3>
                </div>

                <div className="p-6 overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-left text-gray-500">
                                <th className="pb-3">Nama Bimtek</th>
                                <th className="pb-3">Tanggal</th>
                                <th className="pb-3">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr className="border-t">
                                <td className="py-3">
                                    Digitalisasi Industri
                                </td>
                                <td className="py-3">
                                    12 Januari 2026
                                </td>
                                <td className="py-3">
                                    <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-700">
                                        Hadir
                                    </span>
                                </td>
                            </tr>

                            <tr className="border-t">
                                <td className="py-3">
                                    Transformasi Digital UMKM
                                </td>
                                <td className="py-3">
                                    25 Januari 2026
                                </td>
                                <td className="py-3">
                                    <span className="px-2 py-1 rounded text-xs bg-yellow-100 text-yellow-700">
                                        Terdaftar
                                    </span>
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="py-3">
                                    Pelatihan Penyelia Halal 2026
                                </td>
                                <td className="py-3">
                                    28 Januari 2026
                                </td>
                                <td className="py-3">
                                    <span className="px-2 py-1 rounded text-xs bg-red-100 text-red-700">
                                        Tidak Hadir
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Quick Action */}
            <div className="flex gap-4">
                <a
                    href="/peserta/presensi"
                    className="inline-flex items-center px-5 py-2 rounded bg-blue-700 text-white text-sm hover:bg-blue-800"
                >
                    Scan QR Presensi
                </a>

                <a
                    href="/peserta/sertifikat"
                    className="inline-flex items-center px-5 py-2 rounded border border-blue-700 text-blue-700 text-sm hover:bg-blue-50"
                >
                    Lihat Sertifikat
                </a>
            </div>
        </div>
    );
}
