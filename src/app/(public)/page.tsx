"use client";

import Image from "next/image";
import { useRef } from "react";
import { bimtekList } from "@/data/bimtek";
import { BimtekCarousel } from "@/app/components/bimtek";
import { beritaList } from "@/data/berita";
import BeritaCarousel from "../components/berita/BeritaCarousel";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function LandingPage() {

    const scrollRef = useRef<HTMLDivElement>(null!);
    return (
        <main className="min-h-screen bg-slate-50 text-gray-800">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="relative h-[420px] text-white">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/gedung_bspji.jpg"
                        alt="Balai Standardisasi dan Pelayanan Jasa Industri Banjarbaru"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900/70" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
                    <div className="max-w-2xl text-left">
                        <div className="border-l-4 border-green-400 pl-4">
                            <h2 className="text-4xl font-bold mb-4">
                                Sistem Absensi Peserta Acara (SAPA)
                            </h2>

                            <p className="text-lg text-blue-100">
                                Informasi resmi bimtek, sertifikasi, dan kegiatan
                                <span className="block mt-2 text-green-300 font-medium">
                                    Balai Standardisasi dan Pelayanan Jasa Industri Banjarbaru.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Bimtek */}
            <BimtekCarousel items={bimtekList} />

            {/* Berita */}
            <BeritaCarousel items={beritaList} />

            {/* Footer */}
            <Footer />

        </main>
    );
}
