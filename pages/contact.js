import React from 'react'
import { FaPhoneAlt, FaRegEnvelope, FaMapMarker } from "react-icons/fa";
import styles from '../styles/contact.module.css';

export default function contact() {
  return (
    <main className={styles.container}>
      <section className={styles.contactbox}>
        <div>
          <h1 className={styles.heading1}>Get in Touch</h1>
          <p>
            <span className={styles.icon}>
              <FaPhoneAlt />
            </span>
            Phone +92300000000
          </p>
          <p>
            <span className={styles.icon}>
              <FaRegEnvelope />
            </span>
            Email 92300000000
          </p>
          <p>
            <span className={styles.icon}>
              <FaMapMarker />
            </span>
            Address Abc Street 104 Block near john street 1-678
          </p>
        </div>
      </section>
      <section className={styles.contactform}>
        <form onSubmit={(e) => e.preventDefault()} method="POST">
          <div className={styles.input}>
            <input type="text" placeholder="YOUR NAME*" />
          </div>

          <div className={styles.input}>
            <input type="text" placeholder="YOUR EMAIL*" />
          </div>

          <div className={styles.input}>
            <input type="text" placeholder="YOUR PHONE*" />
          </div>

          <div className={styles.input}>
            <textarea cols="30" rows="10"></textarea>
          </div>
          <div className={styles.button_container}>
            <button className={styles.button} type="submit">
              Send Message
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
