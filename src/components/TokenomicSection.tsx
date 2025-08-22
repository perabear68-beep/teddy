import React from 'react';

interface TokenInfoProps {
  icon: string;
  title: string;
  value: string;
}

const TokenInfo: React.FC<TokenInfoProps> = ({ icon, title, value }) => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="hover-slideDown flex flex-col grow justify-center items-center px-4 pb-6 w-full text-center text-white whitespace-nowrap rounded-3xl border-orange-400 border-solid backdrop-blur-[2px] bg-yellow-700 bg-opacity-30 border-[3px] leading-[100%] max-md:mt-10" style={{background: '#8A581F'}}>
        <img loading="lazy" src={icon} alt="" className="w-10 h-10 aspect-[1.89] -mt-5" />
        <div className="text-4xl tracking-wide">{title}</div>
        <div className="self-stretch mt-6 text-2xl text-hey-comic">{value}</div>
      </div>
    </div>
  );
};

const TokenomicSection = React.forwardRef<HTMLDivElement>((props, ref) => {
  const tokenInfos = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5ef7942014339ded0601e6f2d65ca6912b07ad0f94d7609a0a016efcb6be16e?apiKey=f9f711ac72684fe79caf31b99cec2d64&", title: "Supply", value: "$1,000,000,000" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5bc37aeec2af45d8158971cb4f8dcb23e5622754219aae801690f41c9981d0fd?apiKey=f9f711ac72684fe79caf31b99cec2d64&", title: "Liquidity", value: "Burnt" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c95df5b8fb130a36672f488b3bf622ba5807dbc55b997d0dc125d2d6e071b0c?apiKey=f9f711ac72684fe79caf31b99cec2d64&", title: "Tax", value: "%0" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/94a5c51c8ccba3cb8ed6de8e4ee0770caa8557b3c7d99802aaefb867bb449e07?apiKey=f9f711ac72684fe79caf31b99cec2d64&", title: "Mint", value: "Revoked" }
  ];

  return (
    <section ref={ref} className="flex flex-col items-center pt-20 mt-0 w-full bg-yellow-900 max-md:max-w-full">
      <h2 className="text-6xl text-center text-yellow-400 uppercase border-8 border-black border-solid tracking-[5.12px] text-spicy-black-large max-md:max-w-full max-md:text-4xl border-transparent z-10">
        Tokenomics
      </h2>
      <div className="flex-wrap justify-between content-center py-8 mt-7 w-full gap-y-[743px] max-w-[1230px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaeaee9b4bf6332433db9c7558c7ca7dd131b92f10f96b3c581c5853fd92dbf5?apiKey=f9f711ac72684fe79caf31b99cec2d64&" alt="" className="shrink-0 self-stretch my-auto max-w-full aspect-[0.55] w-[166px] max-md:mt-10" />
          </div>
          <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/db2924fc5bcef2efaf3d3041899a641f4435efe11c8d5aae4be77062ac71598e?apiKey=f9f711ac72684fe79caf31b99cec2d64&" alt="Tokenomic chart" className="w-full aspect-square max-md:mt-10 max-md:max-w-full" />
          </div>
          <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b5c0543cee32381fa85b3969fb9c4c4590f99fdae153778f633fea6bde6e40f?apiKey=f9f711ac72684fe79caf31b99cec2d64&" alt="" className="shrink-0 self-stretch my-auto max-w-full aspect-[0.88] w-[263px] max-md:mt-10" />
          </div>
        </div>
      </div>
      <div className="flex-wrap gap-y-40 justify-between content-start px-12 py-6 mt-7 max-w-full rounded bg-white bg-opacity-10 w-[897px] max-md:px-5" style={{background: '#713F12'}}>
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {tokenInfos.map((info, index) => (
            <TokenInfo key={index} {...info} />
          ))}
        </div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/46952890fc8712086fde966e658e21c6bb912dfa5f1970380d4cc20b4fb25dfa?apiKey=f9f711ac72684fe79caf31b99cec2d64&" alt="" className="self-stretch mt-7 w-full aspect-[9.09] max-md:max-w-full" />
    </section>
  );
});

export default TokenomicSection;