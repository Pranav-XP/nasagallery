import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { format } from "date-fns";
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
    <div>
      <h1 className="p-5">
        {title} - {format(formattedDate, "PPP")}
      </h1>

      <div className="mb-2 rounded-xl border border-slate-50 p-5 w-fit">
        <Image
          className="rounded-md"
          src={hdurl}
          alt={title}
          priority={true}
          width={500}
          height={500}
        />
      </div>
      <p>{copyright ? `Contributed by: ${copyright}` : ""}</p>

      <div className="p-5 flex flex-row gap-5 items-center justify-evenly">
        <Button>
          <Link href={`/${getYesterday(formattedDate)}`}>
            <span className="flex flex-row items-center">
              <ChevronLeft />
              Previous
            </span>
          </Link>
        </Button>

        {isToday == false ? (
          <Button>
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
  );
};

export default Gallery;
