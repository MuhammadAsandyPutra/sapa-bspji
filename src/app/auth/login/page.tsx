"use client";

import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Login submitted");
        router.push("/peserta");
    }
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-4">

            {/* LEFT - IMAGE (2/4 layar) */}
            <div
                className="hidden md:flex md:col-span-2 relative bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url(https://picsum.photos/1600/900?random=20)",
                }}
            >


                <div className="absolute inset-0 bg-blue-900/60"></div>

                <div className="relative z-10 flex flex-col justify-center px-16 text-white">
                    <h1 className="text-4xl font-bold mb-4">SAPA</h1>
                    <p className="text-lg max-w-xl">
                        Sistem Absensi Peserta Acara Online untuk mendukung
                        standardisasi, riset, dan pelayanan industri.
                    </p>
                </div>
            </div>

            {/* RIGHT - FORM (2/4 layar) */}
            <div className="flex items-center justify-center bg-gray-50 px-10 md:col-span-2">
                <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg text-black">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                        Sign In
                    </h2>

                    <button
                        type="button"
                        className="w-full flex items-center justify-center border border-gray-300 rounded-md py-3 mb-4 hover:bg-gray-100 transition"
                    >
                        <FcGoogle className="mr-2 text-xl" />
                        Sign in with Google
                    </button>

                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-2 text-gray-400 text-sm">or</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Username or Email
                            </label>
                            <input
                                type="text"
                                className="mt-1 w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                className="mt-1 w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-6">
                        Don't have an account?{" "}
                        <a href="#" className="text-blue-600 font-medium hover:underline">
                            Sign Up
                        </a>
                    </p>
                    <p className="text-center text-sm mt-6">
                        <a href="/" className="text-blue-600 font-medium hover:underline">
                            Kembali Ke Beranda
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
