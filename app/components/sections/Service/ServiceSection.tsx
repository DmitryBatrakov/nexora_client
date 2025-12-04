"use client";

import Image from "next/image";
import { PinkLightPoint } from "../../ui/PinkLightPoint/PinkLightPoint";
import landingImg from "../../../assets/landing.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import firstCard from "@/app/assets/service-cards/card1.png";
import secondCard from "@/app/assets/service-cards/card2.png";
import thirdCard from "@/app/assets/service-cards/card3.png";
import AnimatedContent from "@/components/ui/AnimatedContent";

type ServiceCard = {
    title: string;
    description: string;
    buttonText: string;
    image: StaticImageData;
    link: string;
};

const data: Record<string, ServiceCard> = {
    firstCard: {
        title: "Landing Pages for Client Acquisition",
        description:
            "High-conversion landing pages with clean structure, modern visuals and smooth animations.",
        buttonText: "View",
        image: firstCard,
        link: "#pricing",
    },
    secondCard: {
        title: "Business Websites & Corporate Platforms",
        description:
            "Multi-page business websites with strong UX, SEO-ready structure and professional presentation.",
        buttonText: "View",
        image: secondCard,
        link: "#pricing",
    },
    thirdCard: {
        title: "E-commerce & Web Applications",
        description:
            "Online stores, booking systems and custom web apps built for performance and easy scalability.",
        buttonText: "View",
        image: thirdCard,
        link: "#pricing",
    },
};

export function ServiceSection() {
    return (
        <section
            id="service"
            className="relative  w-full flex items-center justify-center z-10 pb-5 mb-5 sm:mb-15 scroll-mt-24"
        >
            <div className="absolute inset-0 z-0 opacity-40 overflow-hidden">
                <PinkLightPoint top="-50%" right="-10%" />
            </div>
            <div className="z-10 w-full max-w-7xl mx-auto px-6">
                <AnimatedContent
                    distance={40}
                    direction="vertical"
                    reverse={false}
                    duration={0.1}
                    ease="easeOut"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0}
                >
                    <div className="text-left mb-2">
                        <span className="uppercase text-sm text-[#F0F0F0]/70">
                            Service
                        </span>
                    </div>
                    <div className="mb-15">
                        <h1 className="text-5xl font-bold text-white">
                            What We Offer
                        </h1>
                    </div>
                </AnimatedContent>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {Object.values(data).map((c, index) => (
                        <AnimatedContent
                            distance={50}
                            direction="vertical"
                            reverse={false}
                            duration={0.3}
                            ease=""
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            key={c.title}
                            delay={0.1 + index * 0.1}
                        >
                            <div className="h-[450px] bg-transparent hover:scale-103 hover:shadow-2xl hover:shadow-white/10 transition-transform duration-400 rounded-2xl ">
                                <div className="flex flex-col h-full">
                                    <div className="relative flex-4 overflow-hidden rounded-t-2xl">
                                        <Image
                                            src={c.image}
                                            alt={c.title}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-600"
                                        />
                                    </div>
                                    <div className="flex-2 -mt-4 relative z-10 bg-[#f1f1f119] rounded-2xl backdrop-blur-xl p-5 flex flex-col gap-4">
                                        <h1 className="text-white text-2xl font-bold">
                                            {c.title}
                                        </h1>
                                        <p className="text-gray-300 text-sm">
                                            {c.description}
                                        </p>
                                        <Link
                                            href={c.link}
                                            className="py-1 px-4 w-full rounded-2xl text-white/50 font-bold border-2 border-white/10 hover:text-white/80 hover:border-white/70 transition-colors duration-400"
                                        >
                                            <div className="flex justify-between items-center">
                                                <span>View</span>
                                                <span>
                                                    <IoIosArrowDroprightCircle
                                                        size={22}
                                                        color="#ff83bf"
                                                        className="hover:scale-120 transition-transform duration-300"
                                                    />
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
