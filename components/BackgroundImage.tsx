// components/BackgroundImage.tsx
import React from "react";
import styles from "../styles/BackgroundImage.module.css";

const BackgroundImage: React.FC = () => {
  return (
    <div className={styles.bgImg}>
      <img src="/img/me.png" alt="Background" />
    </div>
  );
};

export default BackgroundImage;
