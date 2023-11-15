import React from 'react'
import styles from './Logo.module.css'
// import logo from '../../assets/Jilani-1.png'
import { Link } from 'react-router-dom'
export default function Logo() {
  const logo = "<JILANI/>";
  // const icon = thenounproject.com/term/person/17235;
  return (
    <>
    <Link to='/' className={styles.link}>
      <div className={styles.logo}>{logo}</div>
        {/* <img src={logo} alt="Jilani" className={styles.logo}/> */}
    </Link>
    </>
  )
}









