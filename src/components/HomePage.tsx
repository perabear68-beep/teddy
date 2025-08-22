import React, { useRef } from "react";
import Layout from "./Layout";
import WelcomeSection from "./WelcomeSection";
import AboutSection from "./AboutSection";
import HowToBuySection from "./HowToBuySection";
import TokenomicSection from "./TokenomicSection";
import CallToAction from "./CallToAction";
import Header from "./Header";

const HomePage: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const howToBuyRef = useRef<HTMLDivElement>(null);
  const tokenomicRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    aboutRef,
    howToBuyRef,
    tokenomicRef,
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <div className="main-img">
        <Header
          sectionRefs={sectionRefs}
          scrollToTop={scrollToTop}
          menuItems={["Home", "About TEDDY", "How to buy", "Tokenomics"]}
        />
        <div className="teddy-block">
          <img className="px-3" src="/teddy.gif" alt="bg" />
        </div>
      </div>
      <WelcomeSection />
      <AboutSection ref={aboutRef} />
      <HowToBuySection ref={howToBuyRef} />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9022ed4173d4320b7f60efb51b0cc2119d1411199d5f3e48c2c3d7cbe31da8a?apiKey=f9f711ac72684fe79caf31b99cec2d64&"
        alt="Decorative element"
        className="z-10 self-end max-w-full shadow-sm aspect-[1.49] w-[407px] mb-[-165px]"
      />
      <TokenomicSection ref={tokenomicRef} />
      <CallToAction />
    </Layout>
  );
};

export default HomePage;
