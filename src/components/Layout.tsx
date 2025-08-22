import React from 'react';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col" style={{background: '#D3824A'}}>
      <main className="flex overflow-hidden relative flex-col justify-center pb-10 w-full text-2xl text-white min-h-[1042px] max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/421a479924a4af41224a7677f586529d476b13bd74da60669b4391998dd58827?apiKey=f9f711ac72684fe79caf31b99cec2d64&" alt="Background" className="-z-10 object-cover absolute inset-0 size-full" />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;