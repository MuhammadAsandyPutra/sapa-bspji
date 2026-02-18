export default function Page() {
    return (
        <div className="space-y-6">
            {/* Heading */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800">
                    Sertifikat Saya 👋
                </h2>
                <p className="text-sm text-gray-600">
                    Berikut daftar sertifikat yang telah kamu peroleh
                </p>
            </div>

            {/* Daftar Sertifikat - Dummys */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Sertifikat Item */}
                <div className="bg-white rounded-lg shadow p-5">
                    <h3 className="font-semibold text-gray-700">
                        Digitalisasi Industri
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                        Diterbitkan pada 15 Januari 2026
                    </p>
                    <a
                        href="#"
                        className="mt-4 inline-block px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition text-sm"
                    >
                        Unduh Sertifikat
                    </a>
                </div>

                <div className="bg-white rounded-lg shadow p-5">
                    <h3 className="font-semibold text-gray-700">
                        Manajemen Kualitas
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                        Diterbitkan pada 30 Februari 2026
                    </p>
                    <a
                        href="#"
                        className="mt-4 inline-block px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition text-sm"
                    >
                        Unduh Sertifikat
                    </a>
                </div>

                <div className="bg-white rounded-lg shadow p-5">
                    <h3 className="font-semibold text-gray-700">
                        Keamanan Siber
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                        Diterbitkan pada 20 Maret 2026
                    </p>
                    <a
                        href="#"
                        className="mt-4 inline-block px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition text-sm"
                    >
                        Unduh Sertifikat
                    </a>
                </div>
            </div>
        </div>
    );
}