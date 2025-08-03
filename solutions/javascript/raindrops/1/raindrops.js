export const convert = (num) => {
  let sound = '';
  const numDividableBy = function (dividor) {
    return num % dividor === 0;
  }
  if (![3,5,7].some( dividor => numDividableBy(dividor) )) {
    return String(num);
  } 
  if(numDividableBy(3)) {
    sound += 'Pling';
  }
  if(numDividableBy(5)) {
    sound += 'Plang';
  }
  if(numDividableBy(7)) {
    sound += 'Plong';
  }
  return sound;
};
