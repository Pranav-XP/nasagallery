import LiftOff from "@/components/lift-off-button";
import { Button } from "@/components/ui/button";
import { circleLogo, logo } from "@/lib/images/utils";
import { Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import React from "react";

export default function Home() {
  const today = () => {
    let now = new Date();
    return now.toISOString().split("T")[0];
  };
  return (
    <>
      <main className="overflow-hidden h-screen flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center border border-slate-700 hover:bg-gray-500/10 rounded-md transition-all duration-300 ease-in-out bg-gray-800/10 p-5">
          <h1 className="text-6xl font-black self-start font-serif tracking-wider">
            Welcome
          </h1>

          <Image
            src={circleLogo}
            alt="Starman Logo"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Button className="w-32 flex justify-evenly font-bold hover:bg-violet-600 bg-violet-500">
            <Link href={`/${today()}`}>Lift Off</Link>
            <Rocket />
          </Button>
        </div>
      </main>
    </>
  );
}
