import React, { useState, useEffect } from "react";
import  {NavLink} from 'react-router-dom'
import arrow_black from '../images/arrow_black.svg'
import styles from "../styles/home.module.scss";

function Home() {
  return(<div className={styles.container}>
<div className={styles.content}>
  <p className={styles.title}>web applications</p>
  <p>Повседневная практика.</p>
  <div className={styles.box_btn}>
    <NavLink to="/discaunts">

    <span>Special Offer</span>
    <img src={arrow_black} alt="arrow_black" />
    </NavLink>
    
  </div>
</div>
  </div>)
}
export default Home;
