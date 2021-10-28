import React from 'react';
import { ProductCard } from '@nitsan770/marketing-brand.ui.product-card';
import styles from './styles.module.scss';

export type ImageViewerProps = {};

export function ImageViewer() {
  //change
  return (
    <div className={styles.container}>
      <ProductCard
        size="big"
        imageURL="https://upload.wikimedia.org/wikipedia/commons/0/02/Air_jordan_XI_space_jam.jpg"
      />

      <span className={styles.viewer}>
        <ProductCard
          size="small"
          imageURL="https://upload.wikimedia.org/wikipedia/commons/0/02/Air_jordan_XI_space_jam.jpg"
        />
        <ProductCard
          size="small"
          imageURL="https://upload.wikimedia.org/wikipedia/commons/0/02/Air_jordan_XI_space_jam.jpg"
        />
        <ProductCard
          size="small"
          imageURL="https://upload.wikimedia.org/wikipedia/commons/0/02/Air_jordan_XI_space_jam.jpg"
        />
        <ProductCard
          size="small"
          imageURL="https://upload.wikimedia.org/wikipedia/commons/0/02/Air_jordan_XI_space_jam.jpg"
        />
      </span>
    </div>
  );
}
