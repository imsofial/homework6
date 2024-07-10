// components/BackgroundImage.tsx
import React from 'react';
import styles from '../styles/BackgroundImage.module.css';
import Image from 'next/image';

type ImageLoaderParams = {
  src: string;
  width: number;
  quality?: number;
};

const imageLoader = ({ src, width, quality }: ImageLoaderParams): string => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

const BackgroundImage: React.FC = () => {
  return (
    <div className={styles.bgImg}>
      <Image
        loader={imageLoader}
        src="/img/me.png"
        alt="Background"
        width={650}
        height={730}
      />
    </div>
  );
};

export default BackgroundImage;
