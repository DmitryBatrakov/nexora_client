import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


export const metadata: Metadata = {
    metadataBase: new URL("https://nexora-client-amber.vercel.app"),
    title: {
        default: "Nexora — Next-Level Web Development",
        template: "%s | Nexora",
    },
    description:
        "We build premium, fast, modern websites and landing pages engineered for growth.",

    authors: [{ name: "Nexora Studio" }],

    keywords: [
        "web development",
        "landing pages",
        "e-commerce",
        "Nexora",
        "Next.js",
        "React",
    ],

    openGraph: {
        type: "website",
        url: "/",
        siteName: "Nexora",
        title: "Next-Level Web Development for your business",
        description:
            "We build premium, fast, modern websites engineered for growth.",
        images: [
            {
                url: "/og-main.png",
                width: 1200,
                height: 630,
                alt: "Nexora — Next-Level Web Development",
            },
        ],
        locale: "en_US",
    },

    manifest: "/manifest.json",

    other: {
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "black-translucent",
    },
};

export const viewport: Viewport = {
    themeColor: "#020318",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
