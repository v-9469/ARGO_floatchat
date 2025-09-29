import React from 'react';
import styles from './Card.module.css';

const Card = ({ children, title, menu, className = '' }) => (
  <div className={`${styles.card} ${className}`}>
    <div className={styles.cardHeader}>
      <h2 className={styles.cardTitle}>{title}</h2>
      {menu && <div className={styles.cardMenu}>{menu}</div>}
    </div>
    <div className={styles.cardBody}>
      {children}
    </div>
  </div>
);

export default Card;