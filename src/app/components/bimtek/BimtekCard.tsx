import Image from "next/image";
import Link from "next/link";
import type { Bimtek } from "@/types/bimtek";

interface BimtekCardProps {
    item: Bimtek;
}

export default function BimtekCard({ item }: BimtekCardProps) {
    const { id, title, date, description } = item;

    return (
        <div className="min-w-[300px] bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
            <div className="relative h-40">
                <Image
                    src={`https://picsum.photos/seed/bimtek-${id}/600/400`}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-5">
                <h4 className="font-semibold text-gray-900">{title}</h4>
                <p className="text-sm text-gray-600 mt-1">{date}</p>
                <p className="text-sm text-gray-700 mt-3 line-clamp-3">{description}</p>

                <Link
                    href={`/bimtek/${id}`}
                    className="inline-block mt-4 text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                    Lihat Detail →
                </Link>
            </div>
        </div>
    );
}
