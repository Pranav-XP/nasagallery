import { Button } from "@/components/ui/button";
import { circleLogo, logo } from "@/lib/images/utils";
import { Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function Home() {
  let today = () => new Date().toISOString().split("T")[0];

  return (
    <>
      <main className="overflow-hidden h-screen flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center border border-slate-500 shadow-inner hover:shadow-none hover:border-none hover:bg-inherit rounded-md transition-all duration-300 shadow-slate-50 bg-zinc-700/10 p-5">
          <Image
            src={circleLogo}
            alt="Starman Logo"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Link href={`/${today()}`}>
            <Button className="w-32 flex justify-evenly font-bold border shadow-inner shadow-indigo-400 border-indigo-600 md:hover:bg-indigo-800 active:bg-indigo-700 bg-indigo-700">
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
