import { Button } from "@/components/ui/button";
import { circleLogo, logo } from "@/lib/images/utils";
import { Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function Home() {
  const today = () => {
    let now = new Date();
    return now.toISOString().split("T")[0];
  };
  return (
    <>
      <main className="overflow-hidden h-screen flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center border border-slate-500 shadow-inner hover:bg-violet-100/10 rounded-md transition-all duration-1000 ease-in-out bg-violet-500/10 p-5">
          <h1 className="text-6xl font-black self-start">Welcome</h1>

          <Image
            src={circleLogo}
            alt="Starman Logo"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Link href={`/${today()}`}>
          <Button className="w-32 flex justify-evenly font-bold hover:bg-violet-600 bg-violet-500">
            Lift Off
            <Rocket />
          </Button>
            </Link>
          <p className="pt-2">
            Made by{" "}
            <a
              href="https://www.pranavtech.dev/"
              className="underline font-semibold"
            >
              Pranav
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
