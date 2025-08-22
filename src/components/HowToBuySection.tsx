import React from 'react';

interface BuyStepProps {
  imageUrl: string;
  title: string;
  description: string;
}

const BuyStep: React.FC<BuyStepProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="flex-wrap content-center py-px max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src={imageUrl} alt={title} className="w-full aspect-square max-md:mt-10" />
        </div>
        <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
          <div className="hover-slideDown flex flex-col self-stretch px-5 py-10 my-auto w-full rounded-lg border-yellow-700 border-solid bg-slate-800 bg-opacity-20 border-[7px] max-md:mt-10 max-md:max-w-full">
            <h3 className="text-3xl tracking-wider leading-7 uppercase border-2 border-black border-solid text-zinc-50 max-md:max-w-full border-transparent">
              {title}
            </h3>
            <p className="mt-4 text-lg font-bold tracking-tight text-gray-200 text-opacity-90 text-comic max-md:max-w-full">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowToBuySection = React.forwardRef<HTMLDivElement>((props, ref) => {
  const buySteps = [
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d9a14ad3d440e5620e5d222bf266fe79ae940b4ac262a4dc79c6f224e1250665?apiKey=f9f711ac72684fe79caf31b99cec2d64&",
      title: "Add Base to MetaMask",
      description: "Download & install the Metamask Wallet either from the app store on your phone of the brower extension for desktop"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f257bedc2d7565cc97572ab94124d76744e2cefafc56bb757db25aeae1064e0?apiKey=f9f711ac72684fe79caf31b99cec2d64&",
      title: "LOAD UP ETH",
      description: "Head over to bridge.base.org, connect your wallet on the Ethereum blockchain. Choose how much ETH you would like to bridge from the ERC20 network to Base. Remember to leave enough for gas Fees!"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/eaec5526dc59eef3de6cfdc7408f9df72835a06fa53b738eb223e8d6d3928cdd?apiKey=f9f711ac72684fe79caf31b99cec2d64&",
      title: "BUY",
      description: "Head over to Uniswap and paste the TEDDY contract address listed on this website to swap your ETH"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f7802a122cc839d0bee1ebcc2dbddd732a7f710be12d225bc49be7b1316ab73?apiKey=f9f711ac72684fe79caf31b99cec2d64&",
      title: "ADD TO YOUR WALLET",
      description: "Now all you have to do is add the TEDDY contract address to your Metamask Wallet for your TEDDY tokens to show. Welcome aboard!"
    }
  ];

  return (
    <section ref={ref} className="flex flex-col items-center mt-36 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center text-6xl text-center text-yellow-400 uppercase border-black border-solid border-[6px] tracking-[5.12px] text-spicy-black max-md:mt-10 max-md:text-4xl border-transparent">
        How to buy
      </h2>
      <div className="flex gap-5 justify-center px-16 py-20 max-md:flex-wrap max-md:px-5 pt-0 max-md:mt-10 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/08b8a934d88409e3f41c64eb9b531f608479f4798f73576341d8e47f6fb10041?apiKey=f9f711ac72684fe79caf31b99cec2d64&" alt="" className="shrink-0 my-auto aspect-[0.05] w-[76px] max-md:hidden" />
        <div className="flex flex-col pt-12 max-md:max-w-full">
          {buySteps.map((step, index) => (
            <BuyStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default HowToBuySection;