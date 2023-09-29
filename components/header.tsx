import { logo } from "@/lib/images/utils";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="flex gap-10 items-center p-1 border-b border-neutral-300 mb-5 bg-nav">
      <Image src={logo} alt="Starman logo" width={100} height={100} />
      <h1 className="text-4xl font-black tracking-wider">Welcome Starman!</h1>
    </header>
  );
};

export default Header;
