import React from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
    return (
      <nav className={styles.navFlex}>
        <div className={styles.navFlex}>
          <h1 className={styles.transparency}>TICKET TRACKER</h1>
        </div>
      </nav>
    );
  };
  
  export default NavBar;