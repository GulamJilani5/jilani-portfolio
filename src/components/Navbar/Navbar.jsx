import React from 'react'
import styles from './Navbar.module.css';
import About from '../../pages/About/About';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/about">About</Link>           
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/skills">Skills</Link>           
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/projects">Projects</Link>           
          </li >
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/blogs">Blogs</Link>           
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/contact">Contact</Link>           
          </li>
        </ul>
    </nav>
  )
}
