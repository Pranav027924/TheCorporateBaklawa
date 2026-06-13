import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GoldDivider from "@/components/GoldDivider";
import WhoWeAre from "@/components/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs";
import GiftingCollections from "@/components/GiftingCollections";
import Customization from "@/components/Customization";
import Industries from "@/components/Industries";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GoldDivider />
        <WhoWeAre />
        <WhyChooseUs />
        <GiftingCollections />
        <Customization />
        <Industries />
        <TrustStrip />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
