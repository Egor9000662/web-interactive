import React, { useState, useEffect } from "react";
import styles from "../styles/info.module.scss";

function Info() {
  return <div className={styles.container}>
    <div className={styles.box_img}>

    </div>
    <div className={styles.box_content_container}>
      <div className={styles.box_content}>
      <p>О компании</p>
      <div className={styles.list}>
      <ul>
        <li>Мы диджитал агентство занимаемся полным циклом продвижения компаний в интернете.</li>
        <li>Разработка сайтов – Сделаем уникальный дизайн согласно вашему фирменному стилю. Напишем чистый код, без использования конструкторов.</li>
        <li>Продвижение – поможем вам быстро добиться желаемого результата, обеспечим постоянный приток новых заявок.</li>
      </ul>
      </div>
    </div>
    </div>
  </div>;
}
export default Info;
