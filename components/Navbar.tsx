import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-3 px-10 border-b-[1px] shadow-lg">
      <div className="flex gap-10 items-center">
        <Link href="/">
          {" "}
          <div>
            <Image src="/mrs.png" width={80} height={70} alt="logo" />
          </div>
        </Link>
        <div className="  flex gap-6">
          <h2 className=" hover:bg-gray-100 p-2 rounded-md cursor-pointer translate-all">
            Home
          </h2>
          <h2 className=" hover:bg-gray-100 p-2 rounded-md cursor-pointer translate-all">
            History
          </h2>
          <h2 className=" hover:bg-gray-100 p-2 rounded-md cursor-pointer translate-all">
            Help
          </h2>
        </div>
      </div>{" "}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Navbar;
