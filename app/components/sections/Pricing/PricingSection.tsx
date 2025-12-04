import { MdDoneAll } from "react-icons/md";
import { PinkLightPoint } from "../../ui/PinkLightPoint/PinkLightPoint";
import AnimatedContent from "@/components/ui/AnimatedContent";
import Link from "next/link";

type Price = {
    usd: string;
    ils: string;
};

type FromText = {
    usd: string;
    ils: string;
};

type PricingCard = {
    title: string;
    price: Price;
    from: FromText;
    description: string;
    features: string[];
};

const pricing: Record<string, PricingCard> = {
    firstCardPrice: {
        title: "Basic",
        price: {
            usd: "$420",
            ils: `החל מ-1390 ש"ח`,
        },
        from: {
            usd: "From: ",
            ils: `החל מ-`,
        },
        description: "Perfect for early-stage startups.",
        features: [
            "Landing page",
            "Responsive design",
            "Basic SEO optimization",
            "Domain connection",
        ],
    },
    secondCardPrice: {
        title: "Pro Plan",
        price: {
            usd: "$690",
            ils: `החל מ-2290 ש"ח`,
        },
        from: {
            usd: "From: ",
            ils: `החל מ-`,
        },
        description: "Ideal for businesses ready to scale.",
        features: [
            "Multi-page website",
            "Responsive design",
            "Advanced SEO optimization",
            "Service integrations",
        ],
    },
    thirdCardPrice: {
        title: "Advanced",
        price: {
            usd: "$2090",
            ils: `נחל מ-6900 ש"ח`,
        },
        from: {
            usd: "From: ",
            ils: `החל מ-`,
        },
        description: "Complete branding solution.",
        features: [
            "Web application",
            "Custom functionality",
            "API integrations",
            "Payment integration",
        ],
    },
};

export function PricingSection() {
    return (
        <section
            id="pricing"
            className="relative min-h-[50vh] w-full flex justify-center items-center z-10 py-5 my-5 sm:my-15 scroll-mt-24 scroll-smooth"
        >
            <div className="absolute inset-0 z-0 opacity-70 overflow-hidden">
                <PinkLightPoint
                    top="30%"
                    right="-10%"
                    height="300px"
                    width="300px"
                />
            </div>
            <div className=" w-full max-w-7xl mx-auto px-6">
                <AnimatedContent
                    distance={40}
                    direction="vertical"
                    reverse={false}
                    duration={0.6}
                    ease="easeOut"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0}
                >
                    <div className="text-left mb-2">
                        <span className="uppercase text-sm text-[#F0F0F0]/70">
                            Pricing
                        </span>
                    </div>
                    <div className="mb-15">
                        <h1 className="text-5xl font-bold text-white">
                            Pricing for Every Ambition
                        </h1>
                        <span className="text-white/50 text-lg">
                            Simple, flexible plans designed to scale with you
                        </span>
                    </div>
                </AnimatedContent>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {Object.values(pricing).map((p, index) => {
                        const isFeatured = index === 1;

                        return (
                            <AnimatedContent
                                key={`${p.title}-${index}`}
                                distance={40}
                                direction="vertical"
                                reverse={false}
                                duration={0.3}
                                ease="easeOut"
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.1}
                                delay={0.1 + index * 0.1}
                            >
                                <div
                                    key={`${p.title}-${index}`}
                                    className={[
                                        "h-[450px] rounded-2xl p-6 hover:scale-102 hover:shadow-lg hover:shadow-white/10 transition-transform duration-400 backdrop-blur-xl",
                                        isFeatured
                                            ? "bg-gray-50 text-slate-900 md:scale-102 hover:scale-103 transition-transform duration-400 "
                                            : "bg-[#f1f1f119] text-white",
                                    ].join(" ")}
                                >
                                    <div className="flex flex-col h-full gap-3 relative">
                                        <h1 className="text-3xl font-bold">
                                            {p.title}
                                        </h1>
                                        {isFeatured && (
                                            <span className="absolute top-0 right-0 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-500 border border-pink-400/40">
                                                Most popular
                                            </span>
                                        )}

                                        <p
                                            className={[
                                                isFeatured
                                                    ? "text-black/80"
                                                    : "text-lg text-white/50",
                                            ].join(" ")}
                                        >
                                            {p.description}
                                        </p>

                                        <div>
                                            {p.features.map((f, i) => (
                                                <ul
                                                    key={`${i}-${f}`}
                                                    className="flex gap-3 items-center justify-start mb-3"
                                                >
                                                    <MdDoneAll
                                                        size={20}
                                                        fill={
                                                            isFeatured
                                                                ? "#ec489a"
                                                                : "#ff83bf"
                                                        }
                                                    />
                                                    <li className="text-lg">
                                                        {f}
                                                    </li>
                                                </ul>
                                            ))}
                                        </div>

                                        <div className="mt-auto">
                                            <span
                                                className={[
                                                    "font-semibold text-xl",
                                                    isFeatured
                                                        ? "text-sm text-black/80"
                                                        : "text-sm text-white/80",
                                                ].join(" ")}
                                            >
                                                {p.from.usd}
                                            </span>
                                            <span className="text-4xl font-bold ml-1">
                                                {p.price.usd}
                                            </span>
                                        </div>
                                        <Link
                                            href="#contact"
                                            className={[
                                                "mt-4 w-full rounded-2xl py-3 font-semibold transition-colors duration-200 text-white/80 leading-normal text-center",
                                                isFeatured
                                                    ? "bg-[#ee56a2] text-black hover:bg-[#a43b6f]"
                                                    : "border border-white/20 hover:bg-white/10",
                                            ].join(" ")}
                                        >
                                            Contact
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedContent>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
