import { isPrime } from '../prime';

test('prime', () => {
  expect(isPrime(3)).toBe(true);
  expect(isPrime(4)).toBe(false);
  const result = [];
  for (let i = 1; i < 100; i += 1) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  console.log(result);
});
