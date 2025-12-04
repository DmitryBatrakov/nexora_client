"use client";

type ButtonProps = {
    text: string
}

export function CustomButton({ text }: ButtonProps) {
    return (
        <div className="relative group mt-4 inline-flex">
            <div className="absolute inset-[-2px] rounded-xl bg-gradient-to-r from-[#00A2FF] via-[#8A2BE2] to-[#FF007A] blur-[8px] opacity-50 transition-opacity duration-300 group-hover:opacity-80"></div>
            <button
                className={`relative flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8
                   bg-gradient-to-r from-[#00A2FF] via-[#8A2BE2] to-[#FF007A]
                   text-white text-base font-bold leading-normal tracking-wider
                   transition duration-300 hover:shadow-2xl hover:shadow-[#8A2BE2]/40`}
            >
                <span className="truncate">{text}</span>
            </button>
        </div>
    );
}
