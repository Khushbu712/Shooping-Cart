import React from "react";
import styles from "../styles/Navbar.module.css";
import { useValue } from "../itemCustomContext";

function Navbar() {
  const {clear,item,total,toggle} = useValue();

  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
     <div className={styles.buttonsWrapper}>
     <button className={styles.button} onClick={toggle}>Cart</button>
     <button className={styles.button} onClick={clear}>Reset</button>
     </div>
        </div>
  );
}

export default Navbar;
