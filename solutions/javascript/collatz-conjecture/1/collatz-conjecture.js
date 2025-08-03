//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
  if ( n < 1 || n % 1 !== 0 ) throw new Error('Only positive integers are allowed')
  const getNext = n => {
    return n % 2 === 0 ? n / 2 : n * 3 + 1;
  }
  const getCount = n => {
    let count = 0;
    while ( n !== 1 ) {
      n = getNext(n);
      count++;
    }
    return count;
  }
  return getCount(n);
};
