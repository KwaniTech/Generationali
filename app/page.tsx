import Image from "next/image";
import {Button} from "@/components/ui/button";
import HeroSection from "@/components/home/heroSection";
import BgGradient from "@/components/common/bg-gradient";
import DemoSection from "@/components/home/demoSection";
import HowItWorksSection from "@/components/home/howItWorks";
import PricingSection from "@/components/home/PricingSection";
import CTASection from "@/components/home/ctaSection";


export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient/>
    <div className="flex flex-col">
     <HeroSection />
     <DemoSection/> 
     <HowItWorksSection/> 
     <PricingSection/>
     <CTASection/> 
    
     </div>
    </div>
  );
}
 