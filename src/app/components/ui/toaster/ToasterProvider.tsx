"use client"

import { Toaster } from "react-hot-toast"



export default function ToasterProvider() {
    return (
        <div>
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 3000,
                    style: {
                        borderRadius: "12px",
                        background: "#111827",
                        color: "#fff"
                    },
                }}
            />
        </div>
    )
};