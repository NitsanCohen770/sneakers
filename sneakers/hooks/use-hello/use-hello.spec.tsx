import { renderHook, act } from '@testing-library/react-hooks';
import { useHello } from './use-hello';

it('should increment counter', () => {
  const { result } = renderHook(() => useHello())
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})
