import React from 'react';
import { useFetchProduct } from './use-fetch-product';

export const BasicuseFetchProduct = () => {
  const { count, increment } = useFetchProduct();

  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={increment}>increment</button>
    </>
  );
};
