import React from 'react';
import Logo from '../../components/Logo/Logo';
import HtmlIcon from '../../assets/icon/HtmlIcon.svg';
import CssIcon from '../../assets/icon/CssIcon.svg';
import JavascriptIcon from '../../assets/icon/JavascriptIcon.svg';
import ReactjsIcon from '../../assets/icon/ReactjsIcon.svg';
import NodejsIcon from '../../assets/icon/NodejsIcon.svg';
import ExpressjsIcon from '../../assets/icon/ExpressjsIcon.svg';
import MongodbIcon from '../../assets/icon/MongodbIcon.svg';
import SQLIcon from '../../assets/icon/SQLIcon.svg';
import NextjsIcon from '../../assets/icon/NextjsIcon.svg';
import styles from './Skill.module.css'
import Footer from '../../components/Footer/Footer';


//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// USING FLEXBOX FOR LAYOUT
//////////////
/*
export default function Skill() {
  return (
    <>
    <div className={styles.logo}>
      <Logo/>
    </div>
    <div className={styles.container}>
        <h1>Skills</h1>
        <div className={styles.skills}>
            <div className={styles.row1}>
            <img src={HtmlIcon} alt="Htlm icon" className={styles.icon}/>
            <img src={CssIcon} alt="Htlm icon" className={styles.icon}/>
            <img src={JavascriptIcon} alt="Htlm icon" className={styles.icon}/>
            </div>
            <div className={styles.row2}>
            <img src={ReactjsIcon} alt="Htlm icon" className={styles.icon}/>
            <img src={NodejsIcon} alt="Htlm icon" className={styles.icon}/>
            <img src={ExpressjsIcon} alt="Htlm icon" className={styles.icon}/>
            </div>
            <div className={styles.row3}>
            <img src={MongodbIcon} alt="Htlm icon" className={styles.icon}/>
            <img src={SQLIcon} alt="Htlm icon" className={styles.icon}/>
            <img src={NextjsIcon} alt="Htlm icon" className={styles.icon}/>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
*/
//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// USING GRID FOR LAYOUT
//////////////
export default function Skill() {
    return (
      <>
      <div className={styles.logo}>
        <Logo/>
      </div>
      <div className={styles.container}>
          <h1>Skills</h1>
          <div className={styles.skills}>
              <img src={HtmlIcon} alt="Htlm icon" className={styles.icon}/>
              <img src={CssIcon} alt="Htlm icon" className={styles.icon}/>
              <img src={JavascriptIcon} alt="Htlm icon" className={styles.icon}/>
              <img src={ReactjsIcon} alt="Htlm icon" className={styles.icon}/>
              <img src={NodejsIcon} alt="Htlm icon" className={styles.icon}/>
              <img src={ExpressjsIcon} alt="Htlm icon" className={styles.icon}/>
              <img src={MongodbIcon} alt="Htlm icon" className={styles.icon}/>
              <img src={SQLIcon} alt="Htlm icon" className={styles.icon}/>
              <img src={NextjsIcon} alt="Htlm icon" className={styles.icon}/>  
          </div>
      </div>
      <Footer/>
      </>
    )
  }