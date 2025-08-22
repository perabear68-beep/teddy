import React from "react";
const LINKS = {
  Dextools: "https://www.dextools.io/app/en/base/pair-explorer/0x9352f8130203dcf4c8de28b193241b0f41a61795?t=1742828214234",
  DexScreener: "https://dexscreener.com/base/0x9352f8130203dcf4c8de28b193241b0f41a61795",
  Twitter: "https://x.com/base_teddy",
  Telegram: "https://t.me/teddy_on_base",
};
const WelcomeSection: React.FC = () => {
  const linkIconSocial = (socialName: string) => {
    switch (socialName) {
      case "Dextools":
        return "https://cdn.builder.io/api/v1/image/assets/TEMP/0bac5c22be85d83cb4244a655ac03075cdbc8d6edb53edd4b8e31aa8066f0f17?apiKey=f9f711ac72684fe79caf31b99cec2d64&";
      case "DexScreener":
        return "https://cdn.builder.io/api/v1/image/assets/TEMP/d3b1eccd41c960c138c48f686710def0bc4bd91cb0993f44081bb38f85495e1a?apiKey=f9f711ac72684fe79caf31b99cec2d64&";
      case "Twitter":
        return "https://cdn.builder.io/api/v1/image/assets/TEMP/dd5bd7bf00cd00d911ee47f7008c285863e33ca7359a1aa85d67101a1fde6119?apiKey=f9f711ac72684fe79caf31b99cec2d64&";
      default:
        return "https://cdn.builder.io/api/v1/image/assets/TEMP/f806a47357ca479dfe16fdb0348d0940cb12ee34e8c75d600da0e7390bbfbebf?apiKey=f9f711ac72684fe79caf31b99cec2d64&";
    }
  };

  const copyToClipboard = async (text: string) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="flex justify-center items-center self-center px-16 py-6 w-full bg-yellow-500 rounded-2xl pt-20 shadow-sm max-w-[1260px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[663px]">
        <h1 className="text-center text-6xl uppercase border-4 border-white border-solid !border-transparent leading-[72px] text-yellow-950 text-spicy-white max-md:max-w-full max-md:text-4xl">
          welcome to TEDDY
        </h1>
        <div className="flex gap-2.5 justify-between px-6 py-2.5 mt-6 text-2xl tracking-widest leading-8 whitespace-nowrap bg-yellow-200 w-full rounded-xl text-yellow-950 max-md:flex-wrap max-md:px-5 max-md:mr-1.5">
          <div className="flex w-full justify-between gap-2">
            <div className="w-full text-ellipsis overflow-hidden">
              <div>$TEDDY CONTRACT:</div>
              <span className="w-full">0x935...41A61795</span>
            </div>
            <img
              onClick={() => copyToClipboard("0x9352F8130203dcf4c8DE28b193241b0F41A61795")}
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/50a6f2af174403cf48752cfc2103384f8cf9ee57bdc69bdf229ab3f67943eb2b?apiKey=f9f711ac72684fe79caf31b99cec2d64&"
              alt=""
              className="shrink-0 my-auto aspect-[0.9] w-[35px] cursor-pointer"
            />
          </div>
        </div>
        <div
          className="flex flex-col flex-wrap justify-center content-center px-0 py-5 mt-6 text-base leading-6 text-center text-white whitespace-nowrap rounded-xl bg-white bg-opacity-10 max-w-[1200px] max-md:mr-1.5 max-md:max-w-full"
          style={{ background: "#EAB308" }}
        >
          <div className="flex gap-4 max-md:flex-wrap w-full">
            {["Dextools", "DexScreener", "Twitter", "Telegram"].map(
              (item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const link = LINKS[item as keyof typeof LINKS];
                    if (link) {
                      window.open(link);
                    }
                  }}
                  className="tool-custom-hover flex flex-1 gap-2 justify-center px-6 py-4 rounded-2xl border-solid backdrop-blur-none bg-yellow-950 bg-opacity-70 border-[3px] border-yellow-950 rounded-b-none"
                >
                  <img
                    loading="lazy"
                    src={linkIconSocial(item)}
                    alt=""
                    className="shrink-0 w-6 aspect-square"
                  />
                  <span>{item}</span>
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
