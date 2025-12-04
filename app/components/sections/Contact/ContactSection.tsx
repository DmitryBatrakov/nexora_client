import Image from "next/image";
import { BlueLightPoint } from "../../ui/BlueLightPoint/BlueLightPoint";
import { CustomInput } from "../../ui/Input/CustomInput";
import ContactUsImage from "@/app/assets/contact-us/contactUs.png";
import { CustomSelect } from "../../ui/Select/CustomSelect";
import { useState } from "react";
import { CustomButton } from "../../ui/Button/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";

const categoryOptions = [
    { value: "landing", label: "Landing Page" },
    { value: "website", label: "Corporate Website" },
    { value: "ecommerce", label: "E-commerce Platform" },
];

export function ContactSection() {
    const [category, setCategory] = useState<string | undefined>(undefined);

    return (
        <section
            id="contact"
            className="relative min-h-[60vh] w-full flex justify-center items-center z-10 py-5 my-5 sm:my-15 scroll-mt-24"
        >
            <div className=" w-full max-w-7xl mx-auto overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-100 hidden sm:block">
                    <BlueLightPoint top="25%" left="20%" />
                </div>
                <AnimatedContent
                    direction="horizontal"
                    reverse={true} // ← слева
                    distance={80}
                    duration={0.7}
                    ease="easeOut"
                    initialOpacity={0}
                    animateOpacity
                >
                    <div className="ml-7 md:ml-8">
                        <span className="text-sm uppercase text-white/70">
                            Contact Us
                        </span>
                    </div>
                </AnimatedContent>
                <div className="backdrop-blur-3xl rounded-2xl flex flex-col justify-between items-start px-6 py-2 md:py-6">
                    <AnimatedContent
                        direction="horizontal"
                        reverse={true} // ← слева
                        distance={80}
                        duration={0.7}
                        ease="easeOut"
                        initialOpacity={0}
                        animateOpacity
                    >
                        <div className=" mb-3">
                            <span className="text-5xl font-bold text-white">
                                Contact Us
                            </span>
                        </div>
                    </AnimatedContent>
                    <div className=" grid grid-cols-1 md:grid-cols-[2fr_2fr] justify-between w-full gap-8 sm:gap-2">
                        <AnimatedContent
                            direction="horizontal"
                            reverse={true}
                            distance={80}
                            duration={0.8}
                            ease="easeOut"
                            initialOpacity={0}
                            animateOpacity
                        >
                            <div className="flex flex-col gap-5 justify-center">
                                <div>
                                    <p className="text-white ml-5 mb-1">
                                        Your Name
                                    </p>
                                    <CustomInput
                                        placeholder="Your Name"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <p className="text-white ml-5 mb-1">
                                        Your Email
                                    </p>
                                    <CustomInput
                                        placeholder="example@gmail.com"
                                        type="email"
                                    />
                                </div>
                                <div>
                                    <p className="text-white ml-5 mb-1">
                                        Your Phone Number
                                    </p>
                                    <CustomInput
                                        placeholder="+972 000 00 00"
                                        type="number"
                                    />
                                </div>
                                <div className="relative">
                                    <p className="text-white ml-5 mb-1">
                                        Category
                                    </p>
                                    <CustomSelect
                                        name="category"
                                        value={category}
                                        onChange={setCategory}
                                        placeholder="Select project type"
                                        options={categoryOptions}
                                        className="px-5 py-6.5 rounded-xl bg-[#ffffff0d] border-none text-white/70 placeholder-white/40 focus:ring-2 focus:ring-white/80 focus:outline-none"
                                        contentClassName="bg-white/5 backdrop-blur-xl border-none  text-white/80 rounded-xl "
                                        itemClassName="cursor-pointer focus:bg-white/10 focus:text-white my-1 px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <p className="text-white ml-5 mb-1">
                                        Message
                                    </p>
                                    <textarea
                                        rows={4}
                                        placeholder="Write your message..."
                                        className="w-full px-5 py-4 rounded-xl bg-white/5 backdrop-blur-xl  text-white/70 placeholder-white/40 focus:ring-white/80 focus:ring-2 focus:outline-none resize-none"
                                    ></textarea>
                                </div>
                                <div className="">
                                    <CustomButton text="Send Message" />
                                </div>
                            </div>
                        </AnimatedContent>
                        <AnimatedContent
                            direction="horizontal"
                            reverse={false}
                            distance={80}
                            duration={0.8}
                            ease="easeOut"
                            initialOpacity={0}
                            animateOpacity
                        >
                            <div className=" flex justify-center items-center w-full h-full order-1 md:order-2">
                                <div className="relative w-full max-w-md">
                                    <Image
                                        src={ContactUsImage}
                                        alt="Contact Us"
                                        className="rounded-[50px] w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </div>
        </section>
    );
}
