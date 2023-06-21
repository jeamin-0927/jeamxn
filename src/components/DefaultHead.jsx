import Head from "next/head";
import React from "react";

const DefaultHead = ({ children }) => {
  return (
    <Head>
      <title>JEAMXN :: 최재민 포트폴리오</title>
      <meta name="description" content="JEAMXN :: 최재민 포트폴리오" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content="https://jeamxn.dev/og_image.png" />
      {/* <script defer data-domain="dimigo.net" src="https://analytics.2w.vc/js/script.js"></script> */}
      {children}
    </Head>
  );
};

export default DefaultHead;