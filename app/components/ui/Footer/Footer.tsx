import { Logo } from "../Logo/Logo";

export function Footer() {
    return (
        <header className="relative w-full flex flex-col gap-6 items-center justify-center z-10 mb-5">
            <div className="relative w-full">
                <div className="absolute top-0 left-0 w-full h-[0.5px] bg-white/20"></div>
            </div>
            <div className="z-10 w-full max-w-7xl mx-auto p-5 flex flex-col items-center justify-center">
                <div className=" gap-3 text-white flex">
                    <div className="size-7 flex">
                        <Logo color="white" />
                    </div>
                    <h2 className="text-[#F0F0F0] text-2xl font-bold leading-tight tracking-tight">
                        Nexora
                    </h2>
                </div>
                <div className="text-white/50 text-sm max-w-4xl text-center">
                    <h2 className="py-4">
                        High-performance websites and web apps built for
                        ambitious brands. You bring the vision — we turn it into
                        something extraordinary.
                    </h2>
                </div>
                <div className="relative w-3/4">
                    <div className="absolute top-3 left-0 w-full h-[0.5px] bg-white/20"></div>
                </div>
                <div className=" text-white/50 w-1/2 text-center text-[12px]">
                    <h2 className="mt-10">
                        © Nexora, 2025. All rights reserved.
                    </h2>
                </div>
            </div>
        </header>
    );
}
