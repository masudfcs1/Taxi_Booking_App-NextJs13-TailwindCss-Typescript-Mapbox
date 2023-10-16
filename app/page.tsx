import Booking from "@/components/Booking/Booking";
import { UserButton } from "@clerk/nextjs";
import dynamic from "next/dynamic";
import Image from "next/image";

export default function Home() {
  const Dynamic = dynamic(() => import("../components/Booking/Booking"), {
    ssr: false
  });
  return (
    <div className=" h-full">
      <div className=" grid grid-cols-1 h-full md:grid-cols-3">
        <div className=" bg-blue-100">
          <Dynamic />
        </div>
        <div className=" col-span-2 bg-red-100 ">map</div>
      </div>
    </div>
  );
}
