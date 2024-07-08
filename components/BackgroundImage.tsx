// components/BackgroundImage.tsx
import React from "react";
import styles from "../styles/BackgroundImage.module.css";
import Image from "next/image";

const BackgroundImage: React.FC = () => {
  return (
    <div className={styles.bgImg}>
      <Image src="/img/me.png" alt="Background" width="52"/>
    </div>
  );
};

export default BackgroundImage;
