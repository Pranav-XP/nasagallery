import Gallery from "@/components/gallery";
import React from "react";

const DatedPage = async ({ params }: { params: { date: string } }) => {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${params.date}`,
    { next: { revalidate: 3600 } }
  );

  const data = await res.json();

  return <Gallery {...data} />;
};

export default DatedPage;
