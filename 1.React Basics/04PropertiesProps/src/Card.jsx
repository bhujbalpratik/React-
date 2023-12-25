import React from "react";

const Card = ({ cardName, btnText, imgSrc }) => {
  return (
    <>
      <div className="relative h-[400px] w-[300px] rounded-md ml-4 ">
        <img
          src={imgSrc}
          alt="Image"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent hover:from-gray-600"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{cardName}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 p-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white hover:border-b-2 hover:border-gray-400 hover:rounded-md outline-none">
            {btnText} →
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
