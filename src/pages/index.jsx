/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "%/Home.module.css";
import DefaultHead from "@/components/DefaultHead";

const maxPage = 8;

export default function Home() {
  return (
    <>
      <DefaultHead />
      <main className={styles.main}>
        {
          Array(maxPage).fill(0).map((_, i) => (
            <div key={i} className={styles.imageContainer}>
              <div 
                style={{
                  backgroundImage: `url(/documents/${i + 1}.svg)`,
                }}
                alt={`${i + 1} 페이지`} 
                className={styles.image}
              />
            </div>
          ))
        }
      </main>
    </>
  );
}
