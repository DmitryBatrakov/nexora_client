import Image from "next/image";
import AboutUsImg from "../../../assets/about-us/aboutUs9.png";
import { CustomButton } from "../../ui/Button/Button";
import { BlueLightPoint } from "../../ui/BlueLightPoint/BlueLightPoint";
import FadeContent from "@/components/ui/FadeContent";

export function AboutUs() {
    return (
        <section
            id="about"
            className="relative min-h-[50vh] w-full flex items-center justify-center  z-10 py-5 my-5 sm:my-15 scroll-mt-24"
        >
            <div className="absolute inset-0 z-0 opacity-90 hidden sm:block">
                <BlueLightPoint top="20%" left="20%" />
            </div>
            <div className=" w-full max-w-6xl mx-auto">
                <FadeContent
                    blur={true}
                    duration={1.1} // секунды
                    ease="easeOut" // если это framer-motion
                    initialOpacity={0}
                    delay={0}
                >
                    <div className="hidden md:block ml-8">
                        <span className="uppercase text-sm text-[#F0F0F0]/70">
                            About us
                        </span>
                    </div>
                </FadeContent>
                <div className="px-4 sm:px-7 py-1 grid grid-cols-1 lg:grid-cols-[2fr_2fr] gap-8 md:gap-6 justify-between w-full backdrop-blur-xl rounded-none md:rounded-2xl">
                    <FadeContent
                        blur={true}
                        duration={1}
                        ease="easeOut"
                        initialOpacity={0}
                        delay={0.1}
                    >
                        <div className="-mb-3 md:hidden">
                            <span className="uppercase text-sm text-[#F0F0F0]/70">
                                About us
                            </span>
                        </div>
                        <div className=" flex flex-col justify-around gap-3 sm:gap-5 mt-5 order-2 md:order-1">
                            <h1 className="text-white text-5xl font-bold ">
                                Driven by meaningful digital transformation
                            </h1>
                            <p className="text-white text-[18px] my-5 w-full sm:w-2/3">
                                We help small and medium-sized businesses grow
                                confidently in the digital space, turning
                                technology into a clear and effective tool for
                                development.
                            </p>
                            <div className="flex flex-col gap-5 w-full sm:w-2/3">
                                <p className="text-white text-[16px]">
                                    With a structured process, attention to
                                    detail, and transparent communication, we
                                    turn ideas into digital products that
                                    genuinely move businesses forward.
                                </p>
                                <p className="text-white text-[16px]">
                                    At Nexora, we create websites and
                                    applications that support your brand
                                    strategy and strengthen your online
                                    presence. Our solutions attract audiences,
                                    build trust, and open new opportunities for
                                    growth.
                                </p>
                            </div>
                            <div className="w-full">
                                <CustomButton text="View" />
                            </div>
                        </div>
                    </FadeContent>
                    <FadeContent
                        blur={true}
                        duration={1.2}
                        ease="easeOut"
                        initialOpacity={0}
                        delay={0.7}
                    >
                        <div className=" flex justify-center items-center w-full h-full order-1 md:order-2">
                            <div className="relative w-full max-w-md">
                                <Image
                                    src={AboutUsImg}
                                    alt="About us"
                                    className="rounded-[50px] w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </FadeContent>
                </div>
            </div>
        </section>
    );
}
