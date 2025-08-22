import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section
      className="flex flex-wrap gap-5 justify-between content-between self-center pt-4 pr-20 pl-5 mt-24 max-w-full bg-yellow-400 rounded-xl border-4 border-black border-solid shadow-sm w-[1260px] max-md:pr-5 max-md:mt-10"
      style={{ background: "#FFD401", borderBottom: "10px solid black" }}
    >
      <div className="shrink-0 self-start mt-1.5 rounded-full border-2 border-orange-500 border-solid h-[54px] stroke-[2px] w-[54px]" />
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-center text-white max-md:mt-10 max-md:max-w-full">
              <h2 className="text-6xl tracking-tighter border-black border-solid border-transparent border-[9px] leading-[73px] text-spicy-black-white-large max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                Smart Investment, Fun with TEDDY!
              </h2>
              {/* <button className="justify-center self-center px-6 py-4 mt-6 text-2xl leading-6 rounded-xl border-solid shadow-sm bg-amber-500 bg-opacity-20 border-[3px] border-yellow-950 max-md:px-5">
                Buy now
              </button> */}
              <div className="custom-buynow-btn custom-buynow-bottom-btn rounded-2xl">
                <button  onClick={() => window.open('https://dexscreener.com/base/0x9352f8130203dcf4c8de28b193241b0f41a61795', '_blank')}>
                  <span> BUY NOW</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/386e9bb0dda93fe78d9b5f106247c7f139a1f6019764e2a8f2a1b8b012ce7e4e?apiKey=f9f711ac72684fe79caf31b99cec2d64&"
              alt="Teddy bear illustration"
              className="grow w-full aspect-[1.25] max-md:max-w-full mb-[-3px] md:mb-[-4px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
