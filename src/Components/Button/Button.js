import React from 'react';   
import styles from './Button.module.css';

const btn = ({ pageChanger }) => {
  return (
    <button type="button" className={styles.btn} onClick={pageChanger}>
      Load more
    </button>
  );
};


export default btn;
