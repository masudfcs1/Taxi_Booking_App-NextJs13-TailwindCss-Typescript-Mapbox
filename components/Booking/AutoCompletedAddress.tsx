import React from "react";

const AutoCompletedAddress = () => {
  return (
    <div className=" mt-5 h-full">
      <div className=" h-full">
        <label className=" text-gray-400">Where From?</label>
        <input
          type="text"
          className=" outline-none p-1 bg-white border-b-[1px] w-full rounded-md focus:bg-teal-200"
        />
      </div>
      <div className=" mt-3">
        <label className=" text-gray-400">Where To?</label>
        <input
          type="text"
          className=" outline-none p-1 bg-white border-b-[1px] w-full rounded-md focus:bg-teal-200"
        />
      </div>
    </div>
  );
};

export default AutoCompletedAddress;
