import Head from "next/head";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";

import Nav from "@/components/nav";
import Sort from "@/components/sort";
import AlbumImageWrapper from "../components/AlbumImageWrapper";
import LightboxImageWrapper from "@/components/LightboxImageWrapper";

import images, { ImageData } from "../data/images";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

export default function Home() {
  const [sortField, setSortField] = useState<keyof ImageData | null>(null);
  const [index, setIndex] = useState(-1);

  const sortedImages = sortField
    ? images.sort((a, b) =>
        a[sortField].toString().localeCompare(b[sortField].toString())
      )
    : images;

  return (
    <>
      <Head>
        <title>Gradient Gallery</title>
      </Head>
      <main>
        <h1 className="my-8 text-center text-4xl font-bold">
          Gradient Gallery
        </h1>
        <Nav current="Home" />
        <Sort setSortField={setSortField} />
        <PhotoAlbum
          layout="rows"
          photos={sortedImages}
          renderPhoto={AlbumImageWrapper}
          onClick={({ index }) => {
            setIndex(index);
          }}
        />

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={sortedImages}
          render={{ slide: LightboxImageWrapper }}
          plugins={[Captions]}
        />
      </main>
    </>
  );
}
