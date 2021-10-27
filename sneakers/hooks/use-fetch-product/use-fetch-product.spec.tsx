import { renderHook, act } from '@testing-library/react-hooks';
import { useFetchProduct } from './use-fetch-product';

it('should increment counter', () => {
  const { result } = renderHook(() => useFetchProduct());
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);
});
