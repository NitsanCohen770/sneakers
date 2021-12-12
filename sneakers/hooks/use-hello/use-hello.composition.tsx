import React from 'react';
import { useHello } from './use-hello';

export const BasicuseHello = () => {
  const { count, increment } = useHello();

  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={increment}>increment</button>
    </>
  );
};
