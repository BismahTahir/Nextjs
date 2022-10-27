import React from "react";
import Meta from "../componnets/Meta";
import styles from "../styles/about.module.css";
// import Image from "next/image";

export default function about() {
  return (
    <div className={styles.container}>
      <Meta title="About" />
      <section className={styles.about_section}>
        <article className={styles.about_pic}>
          {/* <Image
            src="/assets/about.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          /> */}

          <img
            src="/assets/about.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </article>
        <artcle className={styles.about_info}>
          <div className={styles.content}>
            <h1>About Us</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit nihil obcaecati, illo error officiis accusamus
              voluptas perferendis expedita, provident, facere architecto a
              atque eaque. Corrupti vero amet quo labore temporibus officia
              veritatis eum iusto provident. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quaerat incidunt, repellat
              asperiores optio iusto modi? Quaerat culpa in nemo laboriosam
              reiciendis, itaque atque doloremque. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reprehenderit nihil obcaecati, illo
              error officiis accusamus voluptas perferendis expedita, provident,
              facere architecto a atque eaque. Corrupti vero amet quo labore
              temporibus officia veritatis eum iusto provident. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Quaerat incidunt,
              repellat asperiores optio iusto modi? Quaerat culpa in nemo
              laboriosam reiciendis, itaque atque doloremque.
            </p>

            <button className={styles.info}>Read More</button>
          </div>
        </artcle>
      </section>
    </div>
  );
}
