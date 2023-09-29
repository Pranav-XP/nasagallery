import Gallery from "@/components/gallery";
import React from "react";

const DatedPage = async ({ params }: { params: { date: string } }) => {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${params.date}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  let isToday: Boolean;
  params.date === Date.now().toString() ? (isToday = true) : (isToday = false);

  return (
    <main className="flex items-center justify-center">
      <Gallery isToday={isToday} {...data} />
    </main>
  );
};

export default DatedPage;
