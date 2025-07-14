import React from "react";
import CardTypes from "../../../partials/CardTypes";

const Types = () => {
  return (
    <>
      <section id="types" className="py-20 bg-white ">
        <div className="container mx-auto justify-between items-center  ">
          <h2 className="font-bold text-3xl text-center mb-10">
            Popular{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              Milk Tea
            </span>{" "}
            Types
          </h2>

          <div className="grid md:grid-cols-3 gap-7">
            <CardTypes
              background={"bg-pink-200/40"}
              icon={"🥛"}
              title={"Classic Milk Tea"}
              description={
                "The original blend of black tea, milk, and sweetness that started it all."
              }
            />

            <CardTypes
              background={"bg-purple-200/40"}
              icon={"🍯"}
              title={"Honey Dew Milk Tea"}
              description={
                "Refreshing melon flavor combined with creamy milk for a summer favorite."
              }
            />

            <CardTypes
              background={"bg-yellow-200/40 "}
              icon={"🍵"}
              title={"Matcha Milk Tea"}
              description={
                "Earthy green tea powder blended with milk for an antioxidant boost."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Types;
