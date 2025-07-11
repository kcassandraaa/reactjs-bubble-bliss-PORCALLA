import React from "react";

const Banner = () => {
  return (
    <>
      <section className="p-20 bg-pink-100/80 ">
        <div className="container mx-auto flex gap-60  items-center  ">
          {" "}
          {/*gap-96 */}
          <div>
            <h1 className="font-bold text-5xl">
              Discover the{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Joy
              </span>{" "}
              of Milk Tea
            </h1>
            <p className="text-gray-700 text-lg mt-4 mb-5">
              Creamy, sweet, and refreshing our milk tea will transport you to
              flavor paradise with every sip.
            </p>
            <a
              href="#"
              className="bg-pink-500 text-white py-2 px-5 font-semibold rounded-full inline-block "
            >
              Explore Flavors
            </a>
          </div>
          <div className="relative">
            <p className="bg-pink-200 rounded-full h-72 p-40 blur-xl"></p>
            <p className="text-9xl absolute top-0 left-16 ">🧋</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
