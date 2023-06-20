import React from "react";

import styles from "%/Home.module.css";
import DefaultHead from "@/components/DefaultHead";

export default function Home() {
  return (
    <>
      <DefaultHead />
      <main className={styles.main}>
        <iframe 
          // style="border: 1px solid rgba(0, 0, 0, 0.1);" 
          className={styles.iframe}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FFT4RGqm6kyarSaJRzpUeUS%2FJeamin-Portfolio%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-3%26viewport%3D-5811%252C-125%252C0.59%26scaling%3Dscale-down-width%26starting-point-node-id%3D1%253A3" 
          allowFullScreen 
        />
      </main>
    </>
  );
}
