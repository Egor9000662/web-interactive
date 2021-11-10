import React, { useState } from "react";
import LogoDigitalflow from "./images/log.svg";
import ArrowForm from "./images/arrowform.svg";
import telegramm from "./images/telegram.svg";
import vk from "./images/vk.svg";
import inst from "./images/inst.svg";
import gmail from "./images/gmail.svg";
import phone from "./images/phone.svg";
import phone_contacts from "./images/phone_contacts.svg";
import gmail_contacts from "./images/gmail_contacts.svg";
import city_contacts from "./images/city_contacts.svg";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import styles from "./styles/app.module.scss";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Portfolio from "./pages/Potfolio";
import Products from "./pages/Products";
import Discaunt from "./pages/Discaunt";
import AplicationForm from "./pages/AplicationForm";

function App() {
  const [menu, setMenu] = useState(false);
  const [contactsClouse, setContactsClouse] = useState(false);
  const [contactsOpen, setContactsOpen] = useState(true);

  return (
    <Router>
      <div className={styles.global_container}>
        <div className={styles.header}>
          <NavLink to="/home">
            <img src={LogoDigitalflow} alt="logoDigitalflow" />
          </NavLink>
          <div
            className={
              menu
                ? `${styles.header_menu} ${styles.active}`
                : `${styles.header_menu}`
            }
            onClick={() => {
              setMenu((prevState) => !prevState);
            }}
          >
            <span></span>
          </div>
        </div>
        {contactsClouse && (
          <div
            className={styles.btn_menu}
            onClick={() => {
              setContactsOpen(true);
              setContactsClouse(false);
            }}
          >
            Menu
          </div>
        )}
        <div className={styles.box_menu_list}>
          {menu && (
            <div className={styles.menu}>
              (
              <div className={styles.menu_list}>
                <div className={styles.box_contacts_box_menupage}>
                  {contactsOpen && (
                    <div className={styles.menupage}>
                      <NavLink to="/home" activeClassName={styles.chosen} onClick={()=>{setMenu(false)}} >
                        Home
                      </NavLink>
                      <NavLink to="/info" activeClassName={styles.chosen}  onClick={()=>{setMenu(false)}} >
                        Info
                      </NavLink>
                      <NavLink to="/portfolio" activeClassName={styles.chosen}  onClick={()=>{setMenu(false)}} >
                        Portfolio
                      </NavLink>
                      <NavLink to="/products" activeClassName={styles.chosen}  onClick={()=>{setMenu(false)}} >
                        Products
                      </NavLink>
                      <NavLink to="/discaunts" activeClassName={styles.chosen}  onClick={()=>{setMenu(false)}} >
                        Discaunts
                      </NavLink>
                      <div
                        className={styles.contacts}
                        onClick={() => {
                          setContactsOpen(false);
                          setContactsClouse(true);
                        }}
                      >
                        Contacts
                      </div>
                    </div>
                  )}

                  {contactsClouse && (
                    <div className={styles.box_contacts}>
                      <p className={styles.title}>Contacts</p>
                      <div className={styles.contacts_text}>
                        <img src={phone_contacts} />
                        <p> +375 33 683 88 92</p>
                      </div>
                      <div className={styles.contacts_text}>
                        <img src={gmail_contacts} />
                        <p>email.@email.ru</p>
                      </div>
                      <div className={styles.contacts_text}>
                        <img src={city_contacts} />
                        <p>Minsk</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className={styles.btn_form}>
                  <NavLink to="/aplicationform"  onClick={()=>{setMenu(false)}}>
                    <div className={styles.box_title}>
                      <p> Aplication Form</p>
                      <img src={ArrowForm} alt="arrowform" />
                    </div>
                  </NavLink>
                </div>
                <div className={styles.box_link_messenges}>
                  <img src={telegramm} alt="" />
                  <img src={vk} alt="" />
                  <img src={inst} alt="" />
                  <img src={gmail} alt="" />
                  <img src={phone} alt="" />
                </div>
              </div>
            </div>
          )}
        </div>

        <main>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/discaunts" component={Discaunt} />
            <Route exact path="/aplicationform" component={AplicationForm} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
