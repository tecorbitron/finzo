import FAQ from "@/components/home/FAQ";
import HeroSection from "@/components/home/HeroSection";
import HoldMoney from "@/components/home/HoldMoney";
import Pricing from "@/components/home/Pricing";
import SendingMoney from "@/components/home/SendingMoney";
import Statistics from "@/components/home/Statistics";
import StrategicChoice from "@/components/home/StrategicChoice";
import TrustUs from "@/components/home/TrustUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Statistics />
      <HoldMoney />
      <SendingMoney />
      <StrategicChoice />
      <Pricing />
      <FAQ />
      <TrustUs />
    </main>
  );
}
