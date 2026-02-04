"use client";

import Link from "next/link";
import { useState } from "react";
import {
    FiHome,
    FiBookOpen,
    FiAward,
    FiCamera,
    FiLogOut,
    FiMenu,
    FiX,
} from "react-icons/fi";

export default function PesertaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Overlay (mobile only) */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-blue-700 text-white
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
            >
                {/* Brand */}
                <div className="px-6 py-4 border-b border-blue-600">
                    <h1 className="text-xl font-bold">SAPA</h1>
                    <p className="text-sm text-blue-200">
                        Sistem Absensi Peserta
                    </p>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-6 space-y-1 text-sm">
                    <NavItem href="/peserta" icon={FiHome} label="Dashboard" />
                    <NavItem href="/peserta/bimtek" icon={FiBookOpen} label="Bimtek" />
                    <NavItem href="/peserta/sertifikat" icon={FiAward} label="Sertifikat" />
                    <NavItem href="/peserta/presensi" icon={FiCamera} label="Presensi" />
                </nav>

                {/* Sign Out */}
                <div className="px-4 py-4 border-t border-blue-600">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-4 py-2 rounded text-red-200 hover:bg-red-600 hover:text-white transition text-sm"
                    >
                        <FiLogOut />
                        Sign Out
                    </Link>
                </div>

                <div className="px-6 py-3 text-xs text-blue-200">
                    © 2026 SAPA
                </div>
            </aside>

            {/* Main Content */}
            <div
                className={`
          flex-1 flex flex-col transition-all duration-300
          ${sidebarOpen ? "lg:ml-64" : "ml-0"}
        `}
            >
                {/* Header */}
                <header className="h-14 bg-white border-b flex items-center justify-between px-4 md:px-6">
                    {/* SINGLE TOGGLE BUTTON */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-label="Toggle sidebar"
                        className="text-gray-700"
                    >
                        {sidebarOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                    </button>

                    <h1 className="font-semibold text-gray-700">
                        Dashboard Peserta
                    </h1>

                    <div className="text-sm text-gray-600">
                        Halo, Peserta
                    </div>
                </header>

                <main className="flex-1 p-4 md:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}

/* Nav Item */
function NavItem({
    href,
    icon: Icon,
    label,
}: {
    href: string;
    icon: React.ElementType;
    label: string;
}) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-blue-600 transition"
        >
            <Icon size={18} />
            {label}
        </Link>
    );
}
