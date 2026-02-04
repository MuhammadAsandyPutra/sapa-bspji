import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-700">
                    SAPA
                </h1>

                <nav className="space-x-4">
                    <Link
                        href="/"
                        className="text-gray-800 hover:text-blue-600"
                    >
                        Beranda
                    </Link>
                    <Link
                        href="/berita"
                        className="text-gray-800 hover:text-blue-600"
                    >
                        Berita
                    </Link>
                    <Link
                        href="/bimtek"
                        className="text-gray-800 hover:text-blue-600"
                    >
                        Bimtek
                    </Link>
                    <Link
                        href="/auth/login"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Sign In
                    </Link>
                </nav>
            </div>
        </header>

    );
}
