import { useEffect, useState } from 'react';
import { ProductData } from '@nitsan770/sneakers.types.product-data';

export function useFetchProduct() {
  const [data, setData] = useState<undefined | ProductData>();
  useEffect(() => {
    fetch('https://run.mocky.io/v3/b880ea94-d9ed-4f35-9302-120196b9df38')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return data;
}
