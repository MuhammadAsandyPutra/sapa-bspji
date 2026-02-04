export default function Page() {
    return (
        <div className="space-y-6">
            {/* Heading */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800">
                    Bimtek yang Diikuti 👋
                </h2>
                <p className="text-sm text-gray-600">
                    Berikut daftar bimtek yang kamu ikuti
                </p>
            </div>

            {/* Daftar Bimtek */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Bimtek Item */}
                <div className="bg-white rounded-lg shadow p-5">
                    <h3 className="font-semibold text-gray-700">
                        Digitalisasi Industri
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                        12 Januari 2026
                    </p>
                    <p className="text-sm text-gray-600 mt-3">
                        Pelatihan mengenai digitalisasi dalam industri modern untuk meningkatkan efisiensi dan produktivitas.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow p-5">
                    <h3 className="font-semibold text-gray-700">
                        Manajemen Kualitas
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                        25 Februari 2026
                    </p>
                    <p className="text-sm text-gray-600 mt-3">
                        Bimtek tentang prinsip-prinsip manajemen kualitas untuk memastikan standar tinggi dalam proses produksi.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow p-5">
                    <h3 className="font-semibold text-gray-700">
                        Keamanan Siber
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                        10 Maret 2026
                    </p>
                    <p className="text-sm text-gray-600 mt-3">
                        Pelatihan mengenai praktik terbaik dalam keamanan siber untuk melindungi data dan sistem informasi perusahaan.
                    </p>
                </div>
            </div>
        </div>
    );
}