"use client";

import Image from "next/image";
import { BlueLightPoint } from "../../ui/BlueLightPoint/BlueLightPoint";
import { CustomInput } from "../../ui/Input/CustomInput";
import ContactUsImage from "@/app/assets/contact-us/contactUs.png";
import { CustomSelect } from "../../ui/Select/CustomSelect";
import { useEffect, useState } from "react";
import { CustomButton } from "../../ui/Button/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldError } from "../../ui/Error/FieldError";

import { FaExclamationCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { OrbitProgress } from "react-loading-indicators";

const CATEGORY_VALUES = ["landing", "website", "ecommerce"] as const;

type CategoryValue = (typeof CATEGORY_VALUES)[number];

const categoryOptions: { value: CategoryValue; label: string }[] = [
    { value: "landing", label: "Landing Page" },
    { value: "website", label: "Corporate Website" },
    { value: "ecommerce", label: "E-commerce Platform" },
];

const formSchema = z.object({
    name: z.string().min(2, "Name is too short").max(50, "Name is too long"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(7, "Phone is too short").max(30, "Phone is too long"),
    message: z.string().max(1000, "Message is too long").optional(),
    category: z.enum(CATEGORY_VALUES, {
        error: "Please select project type",
    }),
});

type ContactFormValues = z.infer<typeof formSchema>;

export function ContactSection() {
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
    const [submitError, setSubmitError] = useState<boolean>(false);
    const [submitLoading, setSubmitLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        reset
    } = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    const onValidSubmit = async (data: ContactFormValues) => {
        try {
            setSubmitLoading(true);
            setSubmitSuccess(false);
            setSubmitError(false);
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                }
            );

            if (res.ok) {
                setSubmitSuccess(true);
                 reset({
                     name: "",
                     email: "",
                     phone: "",
                     message: "",
                     category: undefined, // сбрасываем селект
                 });
            } else {
                setSubmitError(true);
            }
        } catch {
            setSubmitLoading(false);
        } finally {
            setSubmitLoading(false);
        }
    };

    useEffect(() => {
        if (!submitSuccess && !submitError) return;

        const timer = setTimeout(() => {
            setSubmitSuccess(false);
            setSubmitError(false);
        }, 1500); 

        return () => clearTimeout(timer);
    }, [submitSuccess, submitError]);

    const category = watch("category");

    return (
        <section
            id="contact"
            className="relative min-h-[60vh] w-full flex justify-center items-center z-10 py-5 my-5 sm:my-15 scroll-mt-24"
        >
            <div className=" w-full max-w-7xl mx-auto overflow-hidden ">
                <div className="absolute inset-0 z-0 opacity-100 hidden sm:block">
                    <BlueLightPoint top="25%" left="20%" />
                </div>
                <AnimatedContent
                    direction="horizontal"
                    reverse={true}
                    distance={80}
                    duration={0.1}
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
                <div className="backdrop-blur-3xl rounded-2xl flex flex-col justify-between items-start px-6 py-2 md:py-6 relative">
                    {(submitSuccess || submitError || submitLoading) && (
                        <div className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#131323e0] border-2 border-white/40 rounded-xl flex justify-center items-center gap-2">
                            {submitLoading ? (
                                <>
                                    <OrbitProgress color="white" size="small" />
                                    <span className="text-white">Sending</span>
                                </>
                            ) : submitError ? (
                                <>
                                    <FaExclamationCircle
                                        color="red"
                                        size={25}
                                    />
                                    <span className="text-white">
                                        Send Error
                                    </span>
                                </>
                            ) : (
                                <>
                                    <FaCheckCircle color="green" size={25} />
                                    <span className="text-white">
                                        Send Successfully
                                    </span>
                                </>
                            )}
                        </div>
                    )}

                    <AnimatedContent
                        direction="horizontal"
                        reverse={true}
                        distance={80}
                        duration={0.1}
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
                            <form
                                className="flex flex-col gap-5 justify-center"
                                onSubmit={handleSubmit(onValidSubmit)}
                            >
                                <div>
                                    <p className="text-white ml-5 mb-1">
                                        Your Name
                                    </p>
                                    <CustomInput
                                        placeholder="Your Name"
                                        type="text"
                                        {...register("name")}
                                    />
                                    <FieldError error={errors.name?.message} />
                                </div>
                                <div>
                                    <p className="text-white ml-5 mb-1">
                                        Your Email
                                    </p>
                                    <CustomInput
                                        placeholder="example@gmail.com"
                                        type="email"
                                        {...register("email")}
                                    />
                                    <FieldError error={errors.email?.message} />
                                </div>
                                <div>
                                    <p className="text-white ml-5 mb-1">
                                        Your Phone Number
                                    </p>
                                    <CustomInput
                                        placeholder="+972 000 00 00"
                                        type="tel"
                                        {...register("phone")}
                                    />
                                    <FieldError error={errors.phone?.message} />
                                </div>
                                <div className="relative">
                                    <p className="text-white ml-5 mb-1">
                                        Category
                                    </p>
                                    <CustomSelect
                                        name="category"
                                        value={category}
                                        onChange={(val) =>
                                            setValue(
                                                "category",
                                                val as CategoryValue,
                                                {
                                                    shouldDirty: true,
                                                    shouldTouch: true,
                                                    shouldValidate: true,
                                                }
                                            )
                                        }
                                        options={categoryOptions}
                                        placeholder="Select project type"
                                        className="px-5 py-6 rounded-xl bg-[#ffffff0d] border-none text-white/70 placeholder-white/40 focus:ring-2 focus:ring-white/80 focus:outline-none"
                                        contentClassName="bg-white/5 backdrop-blur-xl border-none  text-white/80 rounded-xl "
                                        itemClassName="cursor-pointer focus:bg-white/10 focus:text-white my-1 px-3 py-2"
                                    />
                                    <FieldError error={errors.category?.message} />
                                </div>
                                <div>
                                    <p className="text-white ml-5 mb-1">
                                        Message
                                    </p>
                                    <textarea
                                        {...register("message")}
                                        rows={4}
                                        placeholder="Write your message..."
                                        className="w-full px-5 py-4 rounded-xl bg-white/5 backdrop-blur-xl  text-white/70 placeholder-white/40 focus:ring-white/80 focus:ring-2 focus:outline-none resize-none"
                                    ></textarea>
                                    <FieldError
                                        error={errors.message?.message}
                                    />
                                </div>
                                <div className="">
                                    <CustomButton
                                        text="Send Message"
                                        disabled={submitLoading}
                                    />
                                </div>
                            </form>
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
