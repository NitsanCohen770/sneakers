import React from 'react';
import styles from './styles.module.scss';
import { Layout } from '@nitsan770/sneakers.containers.layout';
import { ImageViewer } from '@nitsan770/sneakers.containers.image-viewer';
import { ProductDetails } from '@nitsan770/sneakers.containers.product-details';

export function Product() {
  return (
    <div>
      <Layout />
      <div className={styles.container}>
        <ImageViewer />
        <ProductDetails />
      </div>
    </div>
  );
}
