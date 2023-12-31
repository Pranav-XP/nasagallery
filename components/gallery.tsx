"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import { logo } from "@/lib/images/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

function getYesterday(firstDate: Date) {
  let yesterday = new Date(firstDate);
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split("T")[0];
}

function getTomorrow(firstDate: Date) {
  let tomorrow = new Date(firstDate);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split("T")[0];
}

interface IGalleryProps {
  hdurl: string;
  date: string;
  title: string;
  copyright: string;
  explanation: string;
}

const Gallery = ({
  hdurl,
  date,
  title,
  copyright,
  explanation,
}: IGalleryProps) => {
  let formattedDate = new Date(date);

  const today = () => {
    let now = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    });
    let formatted = new Date(now).toISOString().split("T")[0];
    return formatted;
  };
  let isToday: boolean = date === today();
  return (
    <section>
      <div className="absolute z-50 m-5">
        <h1 className="text-5xl font-black bg-clip-text">{title}</h1>
      </div>

      <Image
        className="rounded-md object-cover object-center transition-opacity opacity-0 duration-1000"
        src={hdurl}
        alt={title}
        priority={true}
        fill={true}
        quality={50}
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-50 w-full ">
        <div className="text-left font-bold w-fit px-5 pb-2 flex text-lg">
          <Image src={logo} alt="second logo" width={50} height={50} />
          <div className="flex flex-col">
            <h2>{date}</h2>
            <h2>{copyright}</h2>
          </div>
        </div>
        <div className="pb-10 pt-5 flex flex-row gap-5 items-center justify-center border-t border-zinc-300 shadow-inner shadow-zinc-400  bg-violet-200/10 md:hover:bg-zinc-900/60 rounded-t-md transition-all duration-300 ease-in-out md:bg-zinc-500/10">
          <Link href={`/${getYesterday(formattedDate)}`}>
            <Button className="w-32 flex justify-evenly font-bold border shadow-inner shadow-indigo-400 active:shadow-indigo-800 border-indigo-600 md:hover:bg-indigo-800 bg-indigo-700">
              <span className="flex flex-row items-center">
                <ChevronLeft />
                Previous
              </span>
            </Button>
          </Link>

          <Popover>
            <PopoverTrigger className=" px-3 py-2 rounded-lg flex items-centerfont-bold border shadow-inner shadow-indigo-400 active:shadow-indigo-800 border-indigo-600 md:hover:bg-indigo-800 bg-indigo-700">
              <Info />
            </PopoverTrigger>
            <PopoverContent className="font-medium h-56 overflow-scroll border-slate-700 bg-slate-50">
              {explanation}
            </PopoverContent>
          </Popover>

          {isToday == false ? (
            <Link href={`/${getTomorrow(formattedDate)}`}>
              <Button className="w-32 flex justify-around font-bold border shadow-inner shadow-indigo-400 active:shadow-indigo-800 border-indigo-600 md:hover:bg-indigo-800 bg-indigo-700">
                <span className="flex flex-row items-center">
                  Next
                  <ChevronRight />
                </span>
              </Button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
