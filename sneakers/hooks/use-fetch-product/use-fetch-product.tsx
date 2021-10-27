import { useEffect, useState } from 'react';
import { ProductData } from '@nitsan770/sneakers.types.product-data';

export function useFetchProduct() {
  const [data, setData] = useState<undefined | ProductData>();
  useEffect(() => {
    fetch('https://www.mockaroo.com/7e430f40')
      .then((response) => response.json())
      .then((data) => setData(data));
  });
  return data;
}
