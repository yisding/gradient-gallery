import Head from "next/head";

import Nav from "@/components/nav";

export default function About() {
  return (
    <>
      <Head>
        <title>Gradient Gallery - About</title>
      </Head>
      <main>
        <h1 className="my-8 text-center text-4xl font-bold">
          Gradient Gallery
        </h1>
        <Nav current="About" />
        <p className="text-center my-32">
          This is a photo gallery of AI images maintained by{" "}
          <a href="https://thegradient.pub/">The Gradient</a>. If you have
          photos you would like to add, please click the Contact link.
        </p>
        <p className="text-center">Website created by Yi.</p>
      </main>
    </>
  );
}
