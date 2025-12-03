"use client";

import { useEffect, useRef, useState } from "react";
import { NavItem } from "../Header/Header";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { HeaderShell } from "../HeaderShell/HeaderShell";
import { Logo } from "../Logo/Logo";

type MobileMenuProps = {
    items: NavItem[];
};

export function MobileMenu({ items }: MobileMenuProps) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const openMenu = () => setOpen(true);
    const closeMenu = () => setOpen(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
    }, [open]);

    useEffect(() => {
        if (!open) return;

        const handleClickOutside = (e: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    return (
        <HeaderShell>
            <div className="  justify-between items-start w-full" ref={menuRef}>
                <div className="flex items-center justify-between gap-3 text-white">
                    <div className="flex gap-2 items-center justify-start">
                        <div className="size-5">
                            <Logo />
                        </div>
                        <h2 className="text-[#F0F0F0] text-xl font-bold leading-tight tracking-tight">
                            Nexora
                        </h2>
                    </div>
                    <div className="flex justify-center items-center">
                        {open ? (
                            <button onClick={closeMenu} className="z-50">
                                <IoCloseSharp color="white" size={25} />
                            </button>
                        ) : (
                            <button onClick={openMenu} className="z-50">
                                <RiMenu3Fill size={23} color="white" />
                            </button>
                        )}
                    </div>
                </div>

                <div
                    className={`w-full overflow-hidden transition-all duration-400 ease-out 
                        ${
                            open
                                ? "max-h-60 opacity-100 mt-3"
                                : "max-h-0 opacity-0 mt-0"
                        }`}
                >
                    <ul className="flex flex-col gap-4 mt-2">
                        {items.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="text-lg font-medium text-white/80"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </HeaderShell>
    );
}
