import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";

import Nav from "../components/nav";
import Sort from "../components/sort";

import images, { ImageData } from "../data/images";

export default function Home() {
  const [sortField, setSortField] = useState<keyof ImageData | null>(null);

  return (
    <>
      <Head>
        <title>Gradient Gallery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1 className="my-8 text-center text-4xl font-bold">
          Gradient Gallery
        </h1>
        <Nav current="Home" />
        <Sort setSortField={setSortField} />
        {/* A photo album with 3 photos. */}
        <PhotoAlbum
          layout="rows"
          photos={
            sortField
              ? images.sort((a, b) =>
                  a[sortField].toString().localeCompare(b[sortField].toString())
                )
              : images
          }
        />
      </main>
    </>
  );
}
