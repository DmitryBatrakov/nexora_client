"use client";

import LiquidEther from "@/app/components/ui/LiquidEtherBackground/LiquidEther";
import { Hero } from "./components/sections/Hero/HeroSection";
import { ServiceSection } from "./components/sections/Service/ServiceSection";
import { Header } from "./components/ui/Header/Header";
import { PricingSection } from "./components/sections/Pricing/PricingSection";
import SplashCursor from "@/app/components/ui/SplashCursorBackground/SplashCursor";
import { AboutUs } from "./components/sections/AboutUs/AboutUs";
import { ContactSection } from "./components/sections/Contact/ContactSection";
import { Footer } from "./components/ui/Footer/Footer";

//bg-[#1a1a2f]
//bg-[#131323]

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-[#121232] relative">
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    zIndex: 1,
                }}
            >
                <SplashCursor
                    SPLAT_RADIUS={0.09}
                    SPLAT_FORCE={5000}
                    DENSITY_DISSIPATION={4}
                    VELOCITY_DISSIPATION={1}
                    // DENSITY_DISSIPATION={5}
                    // VELOCITY_DISSIPATION={2}
                    // CURL={10}
                    SIM_RESOLUTION={64}
                    DYE_RESOLUTION={512}
                />
                {/* <LiquidEther
                    colors={["#00A2FF", "#8A2BE2", "#FF007A"]}
                    mouseForce={20} 
                    cursorSize={80}
                    isViscous={true}
                    viscous={18} 
                    iterationsViscous={24} 
                    iterationsPoisson={28} 
                    resolution={0.5} 
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.35} 
                    autoIntensity={1.4} 
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.8} 
                /> */}
            </div>
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
            </div>
            <Hero />
            <ServiceSection />
            <AboutUs />
            <PricingSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
