import React from "react";

import styles from "%/Home.module.css";
import DefaultHead from "@/components/DefaultHead";

export default function Home() {
  return (
    <>
      <DefaultHead />
      <main className={styles.main}>
        <div>test</div>
      </main>
    </>
  );
}
