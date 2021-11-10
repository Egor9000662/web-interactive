import React, { useState, useEffect } from "react";
import styles from "../styles/portfolio.module.scss";
import arrow_black from '../images/arrow_black.svg'

function Portfolio() {
  return <div className={styles.container}>
    <div className={styles.container_btn_box}>
    <div className={styles.btn_box}>
      <a href="#">
        <p> Перейти на сайт </p>
        <img src={arrow_black} alt="arrow_black" /></a>
    </div>
    </div>s
  </div>;
}
export default Portfolio;
