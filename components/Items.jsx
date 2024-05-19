import React from "react";
import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData";

export function Items() {
  return (
    <div className={styles.wrapper}>
    {data.map((item) =>(
      <ItemCard key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      />
    ))}
    </div>
  );
}

