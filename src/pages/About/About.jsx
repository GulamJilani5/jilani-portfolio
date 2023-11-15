import React from 'react'
import aboutImg from '../../assets/images/about.png';
import styles from './About.module.css';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
export default function About() {
  return (
    <>
    <div className={styles.logo}>
      <Logo/>
    </div>
    <div className={styles.container}>
    <h1>ABOUT</h1>
    <div className={styles.aboutContainer}>
      <img src={aboutImg} alt="About image" className={styles.aboutImage}/>
      <div className={styles.aboutContent}>
        <h2>Brief Introduction About Me</h2>
        <p>I am passionate software developer, inspired and self taught💪.
         Aspiring simple living with high thinking and introvert in nature🙁. 
        </p>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}
