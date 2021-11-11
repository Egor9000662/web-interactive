import React, { useState, useEffect } from "react";
import styles from "../styles/products.module.scss";
import benefits_1 from "../images/icons_benifits/award1.png";
import benefits_2 from "../images/icons_benifits/award2.png";
import benefits_3 from "../images/icons_benifits/award3.png";
import benefits_4 from "../images/icons_benifits/award4.png";
import benefits_5 from "../images/icons_benifits/award5.png";
import benefits_6 from "../images/icons_benifits/award6.png";
import benefits_7 from "../images/icons_benifits/award7.png";
import benefits_8 from "../images/icons_benifits/award8.png";
import benefits_9 from "../images/icons_benifits/award9.png";
import benefits_10 from "../images/icons_benifits/award10.png";
import benefits_11 from "../images/icons_benifits/award11.png";
import benefits_12 from "../images/icons_benifits/award12.png";
import ben_2_1 from "../images/icons_benefist_two/ben_2_1.png";
import ben_2_2 from "../images/icons_benefist_two/ben_2_2.png";
import ben_2_3 from "../images/icons_benefist_two/ben_2_3.png";
import ben_2_4 from "../images/icons_benefist_two/ben_2_4.png";

function Products() {
  return (
    <div className={styles.container}>
      <h1>Что мы предлагаем</h1>
      <div className={styles.container_box_benefits}>
        <div className={styles.box_benefit}>
          <img src={benefits_1} alt="benefits_1" />
          <p>Высокий уровень исполнения </p>
        </div>
        <div className={styles.box_benefit}>
          <img src={benefits_2} alt="" />
          <p>Гарантируем качество работы</p>
        </div>
        <div className={styles.box_benefit}>
          <img src={benefits_3} alt="" />
          <p>Выполним работу быстро</p>
        </div>
        <div className={styles.box_benefit}>
          <img src={benefits_4} alt="" />
          <p>Обеспечим поток заявок</p>
        </div>
        <div className={styles.box_benefit}>
          <img src={benefits_5} alt="" />
          <p>Автоматизируем работу </p>
        </div>
        <div className={styles.box_benefit}>
          <img src={benefits_6} alt="" />
          <p>Разработаем уникальный дизайн</p>
        </div>
        <div className={styles.box_benefit}>
          <img src={benefits_7} alt="" />
          <p>Напишем чистый код </p>
        </div>
        <div className={styles.box_benefit}>
          <img src={benefits_8} alt="" />
          <p>Контекстная реклама</p>
        </div>
        <div className={styles.box_benefit}>
          <img src={benefits_9} alt="" />
          <p>Третированная реклама </p>
        </div>
        <div className={styles.box_benefit}>
          <img src={benefits_10} alt="" />
          <p>SEO продвижение</p>
        </div>
        <div className={styles.box_last_row}>
          <div className={styles.box_benefit}>
            <img src={benefits_11} alt="" />
            <p>Продвижение в социальных сетях</p>
          </div>
          <div className={styles.box_benefit}></div>
          <div className={styles.box_benefit}>
            <img src={benefits_12} alt="" />
            <p>Высокий уровень исполнения </p>
          </div>
        </div>
      </div>
      <div className={styles.box_benefits_two}>
        <div className={styles.container_benefist_two}>
          <h2>Наши преимущества</h2>
          <div className={styles.container_benefist_two_content}>
            <div className={styles.box_benefist_two_content}>
              <img src={ben_2_1} alt="" />
              <p>Сделаем адаптивный дизайн, под любой вид устройств</p>
            </div>
            <div className={styles.box_benefist_two_content}>
              <img src={ben_2_2} alt="" />
              <p>Настроим все возможные способы обратной связи. Заявки на почту, подключим онлайн консультанта, настроим телефонный звон с сайта, подключим Whatsapp к сайту</p>
            </div>
            <div className={styles.box_benefist_two_content}>
              <img src={ben_2_3} alt="" />
              <p>Настроим все возможные способы обратной связи. Заявки на почту, подключим онлайн консультанта, настроим телефонный звон с сайта, подключим Whatsapp к сайту</p>
            </div>
            <div className={styles.box_benefist_two_content}>
              <img src={ben_2_4} alt="" />
              <p>Проведем анализ вашей сферы и конкурентов, предложим лучшие инструменты для продвижения в интернете</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Products;
