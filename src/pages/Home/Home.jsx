import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import img from '../../assets/images/HomeImage.png';
import styles from './Home.module.css';
import Typewriter from 'typewriter-effect';
import Footer from '../../components/Footer/Footer';
export default function Home() {
  return (
     <>
       <Header/>
       <section className={styles.homeSection}>
          <div className={styles.homeDetails}>
            <h1>Hello,</h1>
            <p>This Is Gulam Jilani</p>
            <span className={styles.textEffect}>
               {/* <Typewriter
                 onInit={(typewriter) => {
                     typewriter
                    .typeString("GeeksForGeeks")
                    .pauseFor(1000)
                    .start();
                  }}
               /> */}
               <Typewriter
                   options={{
                       strings: ['Software Engineer', 'Learner & Dreamer', 'MERN Stack Developer'],
                       autoStart: true,
                       pauseFor: 300,
                       loop: true,
                   }}
               />
           </span>
          </div>
          <img src={img} alt='home image' className={styles.homeImage}/>
       </section>
       <Footer/>
     </>
  )
}
