import React, { useEffect, useRef } from "react";

export interface HeaderProps {
  menuItems: string[];
  sectionRefs: {
    aboutRef: React.RefObject<HTMLDivElement>;
    howToBuyRef: React.RefObject<HTMLDivElement>;
    tokenomicRef: React.RefObject<HTMLDivElement>;
  };
  scrollToTop: () => void;
}

const Header: React.FC<HeaderProps> = ({
  menuItems,
  sectionRefs,
  scrollToTop,
}) => {
  const scrollToSection = (ref: any) => {
    if (ref.current) {
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScrool = (item: string) => {
    switch (item) {
      case "About TEDDY":
        scrollToSection(sectionRefs.aboutRef);
        break;
      case "How to buy":
        scrollToSection(sectionRefs.howToBuyRef);
        break;
      case "Tokenomics":
        scrollToSection(sectionRefs.tokenomicRef);
        break;
      default:
        scrollToTop();
        break;
    }
  };

  const svgRef = useRef(null);

  useEffect(() => {
    const current = svgRef.current as any;
    if (current) {
      current.setAttribute("enable-background", "new 0 0 1024 1093.94");
    }
  }, []);

  return (
    <header className="flex relative gap-5 justify-around items-center px-20 py-4 w-full bg-yellow-600 bg-opacity-0 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      {menuItems.map((item, index) => (
        <div
          onClick={() => handleScrool(item)}
          key={index}
          className={`self-stretch my-auto tracking-widest uppercase text-slate-50 cursor-pointer ${
            index === 0 ? "text-yellow-400" : "text-white header-custom-hover"
          }`}
        >
          {item}
        </div>
      ))}
      {/* <button className="justify-center self-stretch px-6 py-4 text-center rounded-2xl border-yellow-700 border-solid backdrop-blur-none bg-amber-500 bg-opacity-30 border-[3px] leading-[100%] rounded-b-none max-md:px-5">
        BUY NOW
      </button> */}
      <div className="custom-buynow-btn rounded-2xl rounded-b-none">
        <button onClick={() => window.open('https://dexscreener.com/base/0x9352f8130203dcf4c8de28b193241b0f41a61795', '_blank')}>
          <span> BUY NOW</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
