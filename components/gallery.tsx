"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  isToday: Boolean;
}

const Gallery = ({ hdurl, date, title, copyright, isToday }: IGalleryProps) => {
  let formattedDate = new Date(date);
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
        <div className="text-left font-bold w-fit px-5">
          <h2>{date}</h2>
          <h2>{copyright}</h2>
        </div>
        <div className="p-5 flex flex-row gap-5 items-center justify-evenly mb-5">
          <Button className="w-32 font-bold">
            <Link href={`/${getYesterday(formattedDate)}`}>
              <span className="flex flex-row items-center">
                <ChevronLeft />
                Previous
              </span>
            </Link>
          </Button>

          {isToday == false ? (
            <Button className="w-32 font-bold">
              <Link href={`/${getTomorrow(formattedDate)}`}>
                <span className="flex flex-row items-center">
                  Next
                  <ChevronRight />
                </span>
              </Link>
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
