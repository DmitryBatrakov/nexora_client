"use client";

import DecryptedText from "@/app/components/ui/DecryptedText/DecryptedText";
import GradientText from "@/app/components/ui/GradientText/GradientText";
import { BlueLightPoint } from "../../ui/BlueLightPoint/BlueLightPoint";
import { PinkLightPoint } from "../../ui/PinkLightPoint/PinkLightPoint";
import { CustomButton } from "../../ui/Button/Button";
import { LogoLoopSection } from "../../ui/LogoLoop/LogoLoop";

export function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
                <BlueLightPoint top="-15%" left="-10%" />
                <PinkLightPoint bottom="-30%" right="-10%" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>
            <div className="pointer-events-none absolute inset-0 flex justify-center">
                <div className="relative w-full max-w-7xl mx-auto">
                    <div className="absolute top-35 md:top-1/4 left-5 md:-left-25 h-24 md:h-48  w-40 md:w-96 -rotate-12 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md z-10" />
                    <div className="absolute bottom-50 right-5 md:-right-10 w-40 h-18 md:h-32 md:w-80 rotate-6 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md z-10" />
                </div>
            </div>

            <div className="relative  flex h-full min-h-screen w-full flex-col z-10">
                <main className="flex flex-1 items-center justify-center">
                    <div className="container mx-auto px-6 text-center">
                        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
                            <h1 className="text-5xl font-black leading-tight tracking-tighter text-[#F0F0F0] md:text-7xl">
                                <span>Next-Level</span>
                                <br />
                                <GradientText
                                    colors={[
                                        "#00A2FF",
                                        "#ff007A",
                                        "#FF007A",
                                        "#e22bab",
                                    ]}
                                    animationSpeed={0}
                                    showBorder={false}
                                >
                                    <DecryptedText
                                        text="Web Development"
                                        speed={150}
                                        maxIterations={11}
                                        characters="ABCD!1@2#3$4%5"
                                        className="font-black"
                                        parentClassName="all-letters"
                                        encryptedClassName="encrypted"
                                        animateOn="view"
                                    />
                                </GradientText>
                                <span>for your business</span>
                            </h1>
                            <h2 className="max-w-2xl text-lg font-normal leading-relaxed text-[#F0F0F0]/70 md:text-xl">
                                We build premium, fast, modern websites
                                engineered for growth.
                            </h2>
                            {/* <CustomButton text="Start project" /> */}
                        </div>
                    </div>
                </main>
                <LogoLoopSection />
            </div>
        </section>
    );
}
