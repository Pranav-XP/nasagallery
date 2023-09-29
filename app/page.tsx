import Gallery from "@/components/gallery";

import React from "react";

export default async function Home() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();

  return (
    <main>
      <Gallery isToday={true} {...data} />
    </main>
  );
}
