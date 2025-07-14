import React from "react";

const CardTypes = ({ icon, title, description, background }) => {
  return (
    <>
      <div className="justify-items-center py-7 px-7 shadow-md bg-pink-200/30 rounded-lg">
        <p className={` p-3 rounded-full mb-4 text-3xl  ${background}`}>
          {icon}
        </p>
        <h3 className="font-semibold text-xl mb-2 text-gray-900 text-center">
          {title}
        </h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </>
  );
};

export default CardTypes;
