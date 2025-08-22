import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center px-16 py-4 mt-24 w-full text-lg tracking-widest text-center text-amber-200 bg-yellow-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-2">
        <div>2025 Teddy | All Rights Reserved</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f19513bad9f264b4fee1ac75ba44b078838b0a25c273c1e8d3dd6e82a884144?apiKey=f9f711ac72684fe79caf31b99cec2d64&" alt="" className="shrink-0 my-auto aspect-[1.12] fill-amber-200 w-[9px]" />
      </div>
    </footer>
  );
};

export default Footer;