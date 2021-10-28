import React from 'react';
import styles from './styles.module.scss';
import { Heading } from '@nitsan770/base-ui.ui.heading';
import { Price } from '@nitsan770/base-ui.pricing.price';
import { Text } from '@nitsan770/base-ui.ui.text';
import { AddToCartBtn } from '@nitsan770/marketing-brand.ui.add-to-cart-btn';
import { Amount } from '@nitsan770/marketing-brand.ui.amount';
import { Discount } from '@nitsan770/marketing-brand.ui.discount';
import { Heading as MarketHeading } from '@nitsan770/marketing-brand.ui.heading';
import { useFetchProduct } from '@nitsan770/sneakers.hooks.use-fetch-product';

export function ProductDetails() {
  const data = useFetchProduct();
  return (
    <div className={styles.container}>
      <span>
        <MarketHeading text="Happy sneakers store" />
      </span>
      <span>
        <Heading>{data?.title}</Heading>
      </span>
      <span>
        <Text text={data?.description} />
      </span>
      <span className={styles.price}>
        <Price value={data?.currentPrice} />{' '}
        <Discount prevPrice={data?.prevPrice} price={data?.currentPrice} />
      </span>
      <span>
        <Price value={data?.prevPrice} isPrevious />
      </span>
      <span className={styles.controls}>
        <Amount />
        <AddToCartBtn
          label="Add to cart"
          addHandler={() => console.log('added')}
        />
      </span>
    </div>
  );
}
