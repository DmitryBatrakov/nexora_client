"use client";

import Link from "next/link";
import { Logo } from "../Logo/Logo";

export function Header() {
    return (
        <header className="w-full  max-w-7xl mx-auto px-6 sm:px-10 py-5 z-10">
            <div className="flex items-center justify-between whitespace-nowrap rounded-full border border-white/10 bg-black/15  backdrop-blur-sm px-6 py-3">
                <div className="flex items-center gap-3 text-white">
                    <div className="size-5">
                        <Logo />
                    </div>
                    <h2 className="text-[#F0F0F0] text-xl font-bold leading-tight tracking-tight">
                        Nexora
                    </h2>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        className="text-[#F0F0F0]/70 hover:text-white transition-colors text-sm font-medium leading-normal"
                        href="#"
                    >
                        Home
                    </Link>
                    <Link
                        className="text-[#F0F0F0]/70 hover:text-white transition-colors text-sm font-medium leading-normal"
                        href="#service"
                    >
                        Services
                    </Link>
                    <Link
                        className="text-[#F0F0F0]/70 hover:text-white transition-colors text-sm font-medium leading-normal"
                        href="#about"
                    >
                        About Us
                    </Link>
                    <Link
                        className="text-[#F0F0F0]/70 hover:text-white transition-colors text-sm font-medium leading-normal"
                        href="#pricing"
                    >
                        Pricing
                    </Link>
                </nav>
                <Link href="#contact" className="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-white text-[#111113] text-sm font-bold leading-normal tracking-wide hover:bg-white/80 transition-colors">
                       Get in touch
                </Link>
                <button className="md:hidden text-white">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </header>
    );
}
