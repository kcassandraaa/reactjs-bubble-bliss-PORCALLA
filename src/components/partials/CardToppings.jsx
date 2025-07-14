import React from "react";

const CardToppings = ({ background, icon, title }) => {
  return (
    <>
      <div className="justify-items-center bg-white px-4 py-4 rounded-lg shadow-md w-32 ">
        <p className={`text-3xl mb-2 p-5 ${background} rounded-full`}>{icon}</p>
        <h3 className="font-semibold">{title}</h3>
      </div>
    </>
  );
};
export default CardToppings;
