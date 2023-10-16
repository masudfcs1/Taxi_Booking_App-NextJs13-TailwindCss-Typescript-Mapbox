import React, { useEffect } from "react";
import AutoCompletedAddress from "./AutoCompletedAddress";

const Booking = () => {
  // useEffect(() => {
  //   console.log(window.innerWidth);
  //   console.log(window.innerHeight);
  // }, []);
  // const screenHeight = window.innerHeight;

  // useEffect(() => {
  //   const screenHight = window.innerHeight;
  // }, [50]);
  // if (typeof window !== "undefined") {
  //   let screenHight = window.innerHeight;
  // }

  // function createGreeting(screenHight) {
  //   return screenHight = window.innerHeight;
  // }
  return (
    <div className=" p-5">
      <h2 className=" text-[20px] font-semibold">Booking</h2>
      <div
        className=" border-b-gray-700 p-5 rounded-md h-full"
        // style={{ height: screenHight }}
      >
        <AutoCompletedAddress />
      </div>
    </div>
  );
};

export default Booking;
