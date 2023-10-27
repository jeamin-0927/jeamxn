import { component$ } from "@builder.io/qwik";
import styles from "./projectsList.module.css";

export default component$(() => {
  return (
    <div class={styles.outer}>
      <div class={styles.projects_list_scroll}>
        <div class={styles.projects_list}>
          {
            Array.from({length: 10}).map((_, i) => (
              <div class={styles.project} key={i}>
                <div class={styles.project_image}></div>
                <div class={styles.project_info}>
                  <div class={styles.project_title}>Main Project</div>
                  <div class={styles.project_desc}>Feast your eyes on Jeamin's crowning achievement—an app defying limits of coding geniuses.</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
});