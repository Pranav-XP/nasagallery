import LiftOff from "@/components/lift-off-button";
import { circleLogo, logo } from "@/lib/images/utils";

import Image from "next/image";

import React from "react";

export default function Home() {
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
          <LiftOff />

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
