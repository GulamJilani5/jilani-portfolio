import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import styles from './Header.module.css';
import Logo from '../../components/Logo/Logo';

export default function Header() {
  return (
    <div className={styles.header}>
      <Logo/>
      <Navbar/>
    </div>
  )
}
