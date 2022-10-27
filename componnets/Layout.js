import React from 'react'
import Navbar from '../componnets/Navbar';
import styles from '../styles/Layout.module.css';
export default function Layout({children}) {
  return (
    <div className={styles.container}>
     
        <Navbar />
        {children}
    </div>
  );
}
