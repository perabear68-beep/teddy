import React from 'react';

const AboutSection = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="flex-wrap justify-between content-center self-center p-20 mt-24 w-full bg-yellow-400 rounded-3xl max-w-[1260px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="/about.png" alt="Teddy Bear" className="self-stretch my-auto w-full aspect-[1.1] max-md:mt-10 max-md:max-w-full" />
        </div>
        <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
          <p className="self-stretch my-auto text-lg font-bold tracking-widest uppercase text-yellow-950 text-comic max-md:mt-10 max-md:max-w-full">
            TEDDY Coin - the charming and whimsical meme coin inspired by Teddy, Mr. Bean's iconic companion! TEDDY Coin brings a blend of nostalgia and humor to the crypto world, celebrating the lovable and quirky spirit of everyone's favorite stuffed bear. Our mission is to create a fun and engaging community where enthusiasts can share laughs, enjoy unique rewards, and be part of a one-of-a-kind journey. With TEDDY Coin, we aim to make cryptocurrency both accessible and entertaining, bringing smiles to faces and value to your portfolio. Join us as we embark on this delightful adventure, spreading joy and innovation in the crypto universe!
          </p>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;