import React from "react";
import CardToppings from "../../../partials/CardToppings";

const Toppings = () => {
  return (
    <>
      <section id="toppings" className="py-20 bg-purple-100/40 ">
        <div className="container mx-auto items-center">
          <div className="text-center">
            <h2 className="font-bold text-3xl mb-5">
              Delicious{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Toppings
              </span>
            </h2>
            <p className="text-gray-600 mb-10">
              Customize your milk tea with these tasty additions that add
              texture and flavor.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <CardToppings
              background={"bg-pink-100/80"}
              icon={"🟤"}
              title={"Boba Pearls"}
            />
            <CardToppings
              background={"bg-yellow-200/60"}
              icon={"🍮"}
              title={"Pudding"}
            />
            <CardToppings
              background={"bg-pink-200/60"}
              icon={"🧊"}
              title={"Jelly"}
            />
            <CardToppings
              background={"bg-green-200/60"}
              icon={"🥥"}
              title={"Coconut"}
            />
            <CardToppings
              background={"bg-blue-200/60"}
              icon={"🧈"}
              title={"Cheese Foam"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Toppings;
