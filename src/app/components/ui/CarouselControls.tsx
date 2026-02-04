"use client";

import { RefObject } from "react";
import clsx from "clsx";

interface CarouselControlsProps {
    scrollRef: RefObject<HTMLDivElement>;
    scrollAmount?: number;
}

export default function CarouselControls({
    scrollRef,
    scrollAmount = 320,
}: CarouselControlsProps) {
    return (
        <div className="flex items-center gap-2">
            {/* Left */}
            <button
                onClick={() =>
                    scrollRef.current?.scrollBy({
                        left: -scrollAmount,
                        behavior: "smooth",
                    })
                }
                aria-label="Scroll left"
                className={clsx(
                    "h-10 w-10 flex items-center justify-center rounded-full",
                    "bg-white border shadow-sm",
                    "text-blue-600",
                    "hover:bg-blue-50 hover:shadow",
                    "active:scale-95 transition"
                )}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Right */}
            <button
                onClick={() =>
                    scrollRef.current?.scrollBy({
                        left: scrollAmount,
                        behavior: "smooth",
                    })
                }
                aria-label="Scroll right"
                className={clsx(
                    "h-10 w-10 flex items-center justify-center rounded-full",
                    "bg-blue-600 border border-blue-600 shadow-sm",
                    "text-white",
                    "hover:bg-blue-700 hover:shadow",
                    "active:scale-95 transition"
                )}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}
