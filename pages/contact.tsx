import Head from "next/head";

import Nav from "@/components/nav";

export default function About() {
  return (
    <>
      <Head>
        <title>Gradient Gallery - Contact</title>
      </Head>
      <main>
        <h1 className="my-8 text-center text-4xl font-bold">
          Gradient Gallery
        </h1>
        <Nav current="Home" />
        <p className="my-32 text-center">
          Do you have some art you wish to display? Contact us using this{" "}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe-1bW_bxr0-oS83pgy_ZF6IwG_UYFYd8KyJ-Cq4leVTL7i8A/viewform">
            Google Form.
          </a>
        </p>
      </main>
    </>
  );
}
