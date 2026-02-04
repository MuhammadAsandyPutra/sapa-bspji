"use client"

import clsx from "clsx"

type Props = {
    value: string
    onChange: (value: string) => void
}

export default function SearchBimtek({ value, onChange }: Props) {
    return (
        <input
            type="text"
            placeholder="Cari nama bimtek..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={clsx(
                "w-full md:w-1/2 px-4 py-2 rounded-lg text-sm",
                "border border-black/30",
                "bg-white",
                "text-gray-800 placeholder-gray-400",
                "focus:outline-none focus:ring-2 focus:ring-green-500"
            )}
        />
    )
}
