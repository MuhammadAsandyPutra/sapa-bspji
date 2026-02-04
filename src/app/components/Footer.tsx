import { FiPhone, FiMail, FiInstagram, FiHome, FiCalendar, FiAward, FiMapPin } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-blue-700 border-t mt-10">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                {/* Info SAPA */}
                <div className="text-white space-y-2">
                    <h3 className="text-lg font-semibold mb-2 border-b-2 border-white inline-block">SAPA</h3>
                    <p className="text-sm">
                        Sistem Absensi Peserta Acara Online, oleh <br />
                        <span className="font-medium">Balai Standardisasi dan Pelayanan Jasa Industri Banjarbaru</span>
                    </p>

                    {/* Kontak */}
                    <div className="mt-2 space-y-1">
                        <div className="flex items-center space-x-2 text-sm">
                            <FiHome className="w-4 h-4" />
                            <span>Jl. Panglima Batur Barat No. 2 Banjarbaru – 70711 Kalimantan Selatan.</span>
                        </div>

                        <div className="flex items-center space-x-2 text-sm">
                            <FiPhone className="w-4 h-4" />
                            <span>+62 811-2345-678</span>
                        </div>

                        <div className="flex items-center space-x-2 text-sm">
                            <FiMail className="w-4 h-4" />
                            <span>info@sapa-asandy.go.id</span>
                        </div>

                        <div className="flex items-center space-x-2 text-sm hover:text-blue-200 transition">
                            <FiInstagram className="w-4 h-4" />
                            <a href="https://www.instagram.com/bspji_banjarbaru/">
                                <span>@bspji_banjarbaru</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Link Penting */}
                <div className="text-white">
                    <h3 className="text-lg font-semibold mb-3 border-b-2 border-white inline-block">
                        Link Penting
                    </h3>

                    <ul className="text-sm space-y-2 mt-2">
                        <li>
                            <a href="/" className="flex items-center space-x-2 hover:text-blue-200 transition">
                                <FiHome className="w-4 h-4" />
                                <span>Beranda</span>
                            </a>
                        </li>

                        <li>
                            <a href="/bimtek" className="flex items-center space-x-2 hover:text-blue-200 transition">
                                <FiCalendar className="w-4 h-4" />
                                <span>Bimtek</span>
                            </a>
                        </li>

                        <li>
                            <a href="/" className="flex items-center space-x-2 hover:text-blue-200 transition">
                                <FiAward className="w-4 h-4" />
                                <span>Sertifikat</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="flex items-center space-x-2 hover:text-blue-200 transition">
                                <FiMail className="w-4 h-4" />
                                <span>Kontak</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Peta BSPJI */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-white border-b-2 border-white inline-flex items-center space-x-2">
                        <FiMapPin className="w-5 h-5" />
                        <span>Lokasi Gedung BSPJI</span>
                    </h3>

                    <div className="w-full h-48 mt-2 rounded-lg overflow-hidden shadow-md">
                        <iframe
                            title="BSPJI Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6353749964987!2d114.82717827497238!3d-3.4385672965359224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de681746741ecb1%3A0xdff9438a55959d9!2sBalai%20Standardisasi%20dan%20Pelayanan%20Jasa%20Industri%20(BSPJI)%20Banjarbaru!5e0!3m2!1sid!2sid!4v1770005205537!5m2!1sid!2sid"
                            width="100%"
                            height="100%"
                            className="border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 text-center text-sm py-4 mt-6 text-gray-600">
                © 2026 SAPA – Kementerian Perindustrian
            </div>
        </footer>

    );
}
