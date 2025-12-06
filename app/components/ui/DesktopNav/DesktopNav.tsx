import Link from "next/link";
import { NavItem } from "../Header/Header";
import { HeaderShell } from "../HeaderShell/HeaderShell";
import { Logo } from "../Logo/Logo";

type DesktopNavProps = {
    items: NavItem[];
};

export function DesktopNav({ items }: DesktopNavProps) {
    return (
        <HeaderShell>
            <div className="flex items-center gap-3 text-white">
                <div className="size-5">
                    <Logo color="white"/>
                </div>
                <h2 className="text-[#F0F0F0] text-xl font-bold leading-tight tracking-tight">
                    Nexora
                </h2>
            </div>
            <nav className="hidden sm:flex items-center gap-8">
                {items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-[#F0F0F0]/70 hover:text-white transition-colors text-sm font-medium leading-normal"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
            <Link
                href="#contact"
                className="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-white text-[#111113] text-sm font-bold leading-normal tracking-wide hover:bg-white/80 transition-colors"
            >
                Get in touch
            </Link>
        </HeaderShell>
    );
}
