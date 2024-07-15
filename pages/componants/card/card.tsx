// components/Card.js

import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  name: string;
  email: string;
  website: string;
  number: number;
  onClick: () => void;
  className: any;
}


const items = ["Item", "Item", "Item"];

const Card: React.FC<CardProps> = ({ className, name, email, website, number, onClick }) => {
  return (
    <><div className={`${styles.card} ${styles[className]}`} onClick={onClick}>
      <div className={styles.cardimg}>
        {/* <img
          src="https://mir-s3-cdn-cf.behance.net/projects/404/5779e0133762633.Y3JvcCwxMTkyLDkzMywxMTIsMA.jpg"
          className="card-img-top"
          alt="..." /> */}
      </div>
      <div className={styles.cardbody}>
        <h3>{name}</h3>
        <p>{email}</p>
        <p>{website}</p>
        <div className={styles.items}>
          {items.map((item, index) => (
            <span key={index} className={styles.item}>
              {item}
            </span>
          ))}
        </div>
        <p>{number}</p>
      </div>
    </div>
    </>
  );
};

export default Card;
