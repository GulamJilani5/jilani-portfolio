import React from 'react'
import styles from './Footer.module.css'
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>&copy; {year}, Portfolio</p>
      <span>Developed By JILANI</span>
  </footer>
  )
}
