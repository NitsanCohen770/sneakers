import React from 'react';
import { Heading } from '@nitsan770/base-ui.ui.heading';
import { Price } from '@nitsan770/base-ui.pricing.price';
import { Text } from '@nitsan770/base-ui.ui.text';
import { AddToCartBtn } from '@nitsan770/marketing-brand.ui.add-to-cart-btn';
import { Amount } from '@nitsan770/marketing-brand.ui.amount';
import { Discount } from '@nitsan770/marketing-brand.ui.discount';
import { Heading as MarketHeading } from '@nitsan770/marketing-brand.ui.heading';
import { useFetchProduct } from '@nitsan770/sneakers.hooks.use-fetch-product';

export function ProductDetails() {
  const { title, description, price, prevPrice } = useFetchProduct();
  return (
    <div>
      <span>
        <MarketHeading text="Happy sneakers store" />
      </span>
      <span>
        <Heading title={title} />
      </span>
      <span>
        <Text text={description} />
      </span>
      <span>
        <Price value={price} /> <Discount prevPrice={prevPrice} price={price} />
      </span>
      <span>
        <Price value={prevPrice} isPrevious />
      </span>
      <span>
        <Amount />
        <AddToCartBtn
          label="Add to cart"
          addHandler={() => console.log('added to cart')}
        />
      </span>
    </div>
  );
}
