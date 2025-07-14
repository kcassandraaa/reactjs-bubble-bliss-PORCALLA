import React from "react";
import CardBenefits from "../../../partials/CardBenefits";

const Benefits = () => {
  return (
    <>
      <section id="benefits" className="py-20 bg-white ">
        <div className="container mx-auto items-center grid md:grid-cols-2 gap-6 md:gap-[11rem] ">
          <div className="">
            <h2 className="font-bold text-3xl mb-5 text-center xl:text-start">
              Why{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Milk Tea
              </span>{" "}
              is Good For You
            </h2>

            <CardBenefits
              background={"bg-pink-200/60"}
              color={"text-pink-500"}
              title={"Antioxidant Rich"}
              description={
                " Tea contains polyphenols that help fight free radicals."
              }
            />
            <CardBenefits
              background={"bg-purple-200/60"}
              color={"text-purple-500"}
              title={"Energy Boost"}
              description={
                "Natural caffeine provides a gentle lift without coffee jitters."
              }
            />
            <CardBenefits
              background={"bg-yellow-200/60"}
              color={"text-yellow-500"}
              title={"Mood Enhancer"}
              description={
                "The comforting warmth and sweetness can brighten your day."
              }
            />
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-purple-100 shadow-md px-5 py-[4.5rem] w-64 rounded-xl justify-self-center">
            <p className="text-6xl mb-3 justify-self-center">💖</p>
            <p className="font-semibold text-center text-gray-700">
              "A cup of milk tea a day keeps the stress away!"
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
