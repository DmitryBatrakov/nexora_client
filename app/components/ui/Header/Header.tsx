import { DesktopNav } from "../DesktopNav/DesktopNav";
import { MobileMenu } from "../MobileNav/MobileNav";


export type NavItem = {
    label: string;
    href: string;
};

const navItems: NavItem[] = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#service" },
    { label: "About Us", href: "#about" },
    { label: "Pricing", href: "#pricing" },
];


export function Header() {
    return (
        <header className="w-full  px-4 md:px-10 py-5 z-10 ">
            <div className="hidden md:block">
                <DesktopNav items={navItems} />
            </div>
            <div className="block sm:hidden">
                <MobileMenu items={navItems} />
            </div>
        </header>
    );
}

