"use client";

import { useRef } from "react";
import CarouselControls from "../ui/CarouselControls";
import BeritaCard from "./BeritaCard";
import type { BeritaItem } from "@/types/berita";

interface BeritaCarouselProps {
    title?: string;
    items: BeritaItem[];
}

export default function BeritaCarousel({
    title = "Berita Kementerian Perindustrian",
    items,
}: BeritaCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null!);

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
                <CarouselControls scrollRef={scrollRef} />
            </div>

            <div className="relative">
                {/* Scrollable Card List */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
                >
                    {items.map((item) => (
                        <BeritaCard key={item.id} item={item} />
                    ))}
                </div>

                {/* Fade Right */}
                <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent" />
            </div>
        </section>
    );
}
