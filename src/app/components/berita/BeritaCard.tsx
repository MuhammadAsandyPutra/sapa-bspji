import Image from "next/image";
import Link from "next/link";
import type { BeritaItem } from "@/types/berita";

interface BeritaCardProps {
    item: BeritaItem;
}

export default function BeritaCard({ item }: BeritaCardProps) {
    const { id, title, excerpt, image } = item;

    return (
        <div className="min-w-[300px] bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
            <div className="relative h-40">
                <Image
                    src={image || `https://picsum.photos/seed/berita-${id}/600/400`}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-5">
                <h4 className="font-semibold text-gray-900">{title}</h4>
                <p className="text-sm text-gray-700 mt-2 line-clamp-3">{excerpt}</p>

                <Link
                    href={`/berita/${id}`}
                    className="inline-block mt-4 text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                    Lihat Detail →
                </Link>
            </div>
        </div>
    );
}
