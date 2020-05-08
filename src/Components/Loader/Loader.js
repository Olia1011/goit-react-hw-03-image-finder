import React from "react";
import Loader from "react-loader-spinner";
import styles from './Loader.module.css';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderSection = () => {
  return (
    <div className={styles.loader}>
      <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default LoaderSection;
