import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-10 bg-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 justify-center gap-3 md:justify-between mb-9">
            <div>
              <div className="flex gap-1 items-center mb-2">
                <h3 className="font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text text-2xl ">
                  Bubble Bliss
                </h3>
                <span>🧋</span>
              </div>
              <p className="text-white/50">Sip happiness in every cup</p>
            </div>

            <div className="flex gap-5 text-xl justify-self-end">
              <p>📱</p>
              <p>📷</p>
              <p>🐦</p>
              <p>📘</p>
            </div>
          </div>

          <p className="text-white/50 text-center border-t border-white/20 pt-5 ">
            © 2025 Bubble Bliss. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
