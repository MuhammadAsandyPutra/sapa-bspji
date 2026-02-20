"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
    FiHome,
    FiBookOpen,
    FiAward,
    FiCamera,
    FiLogOut,
    FiMenu,
    FiX,
    FiBell
} from "react-icons/fi";

export default function PesertaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [notifOpen, setNotifOpen] = useState(false);

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: "bimtek",
            message: "Bimtek React Lanjutan sudah tersedia",
            read: false,
        },
        {
            id: 2,
            type: "sertifikat",
            message: "Sertifikat Bimtek UI/UX sudah bisa diunduh",
            read: false,
        },
    ]);

    const notifRef = useRef<HTMLDivElement>(null);

    const unreadCount = notifications.filter(n => !n.read).length;
    const markAllAsRead = () => {
        setNotifications(prev =>
            prev.map(n => ({ ...n, read: true }))
        );
    };

    const clearAllNotifications = () => {
        setNotifications([]);
    };


    // Auto close dropdown jika klik luar
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                notifRef.current &&
                !notifRef.current.contains(event.target as Node)
            ) {
                setNotifOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Overlay Mobile */}
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
                lg:translate-x-0
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
            <div className="flex-1 flex flex-col lg:ml-64 transition-all duration-300">

                {/* Header */}
                <header className="h-14 bg-white border-b flex items-center justify-between px-4 md:px-6 relative">

                    {/* Toggle Sidebar */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-label="Toggle sidebar"
                        className="text-gray-700 lg:hidden"
                    >
                        {sidebarOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                    </button>

                    <h1 className="font-semibold text-gray-700">
                        Dashboard Peserta
                    </h1>

                    {/* Right Section */}
                    <div
                        className="flex items-center gap-4 relative"
                        ref={notifRef}
                    >
                        {/* 🔔 Notification */}
                        <button
                            onClick={() => setNotifOpen(!notifOpen)}
                            className="relative text-gray-700 hover:text-blue-600 transition"
                        >
                            <FiBell size={20} />

                            {unreadCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
                                    {unreadCount}
                                </span>
                            )}
                        </button>

                        {/* Dropdown */}
                        {notifOpen && (
                            <div className="absolute right-0 top-10 w-72 bg-white shadow-xl rounded-lg border z-50">

                                {/* Header */}
                                <div className="p-3 border-b font-semibold text-sm text-black">
                                    Notifikasi
                                </div>

                                {/* List */}
                                <div className="max-h-64 overflow-y-auto">
                                    {notifications.length === 0 ? (
                                        <div className="p-4 text-sm text-gray-500">
                                            Tidak ada notifikasi
                                        </div>
                                    ) : (
                                        notifications.map((notif) => (
                                            <div
                                                key={notif.id}
                                                onClick={() => {
                                                    setNotifications(prev =>
                                                        prev.map(n =>
                                                            n.id === notif.id
                                                                ? { ...n, read: true }
                                                                : n
                                                        )
                                                    );
                                                }}
                                                className={`px-4 py-3 text-sm cursor-pointer hover:bg-gray-100 transition text-black ${!notif.read
                                                    ? "bg-blue-50 font-semibold"
                                                    : "text-gray-800"
                                                    }`}
                                            >
                                                {notif.message}
                                            </div>
                                        ))
                                    )}
                                </div>

                                {/* Footer Buttons */}
                                {notifications.length > 0 && (
                                    <div className="p-3 border-t flex justify-between text-xs">
                                        {unreadCount > 0 ? (
                                            <button
                                                onClick={markAllAsRead}
                                                className="text-blue-600 hover:underline"
                                            >
                                                Tandai semua sudah dibaca
                                            </button>
                                        ) : (
                                            <div />
                                        )}

                                        <button
                                            onClick={clearAllNotifications}
                                            className="text-red-500 hover:underline"
                                        >
                                            Clear
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="text-sm text-gray-600">
                            Halo, <span className="text-sm text-blue-600"> Asandy</span>
                        </div>
                    </div>
                </header>

                {/* Content */}
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
