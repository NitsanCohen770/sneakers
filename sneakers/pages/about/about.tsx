import React from 'react';
import styles from './styles.module.scss';
import { Layout } from '@nitsan770/sneakers.containers.layout';

export function About() {
  return (
    <div>
      <Layout />
      <div className={styles.container}>
        We were founded at the year 1982 and we sell the best sneakers in the
        world.
      </div>
    </div>
  );
}
