import React from 'react'
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navbar_header}>
          <span></span>
          <span></span>
          <span></span>
          <style jsx>
            {`
              .logo_img: {
                border: solid yellow;
                width: 50px;
                height: 50px;
                display: inline-block;
                text-indent: -999;
                vertical-align: middle;
              }
            `}
          </style>
          <h4>
            Latest Posts
            <span>
              <img src="./logo.png" className={styles.logo_img} />
            </span>
          </h4>
        </div>
        <div className={styles.navbar_menu}>
          <ul className={styles.navbar_nav}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
