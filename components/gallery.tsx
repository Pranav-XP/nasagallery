import React from "react";
import Link from "next/link";
import Image from "next/image";

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

const Gallery = ({
  hdurl,
  date,
  title,
  copyright,
  isToday = false,
}: IGalleryProps) => {
  return (
    <div>
      <h1>
        {title} - {date}
      </h1>
      <Image
        src={hdurl}
        alt={title}
        priority={true}
        quality={100}
        width={500}
        height={500}
      />
      <p>{copyright}</p>
    </div>
  );
};

export default Gallery;
