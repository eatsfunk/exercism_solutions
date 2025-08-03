export function twoSum(array1, array2) {
  return Number(array1.join('')) + Number(array2.join(''));
}

export function luckyNumber(value) {
  return [...String(value)].reverse().join('') == value;
}

export function errorMessage(input) {
  return !input ? 'Required field' : Number(input) === 0 || !Number(input) ? 'Must be a number besides 0' : '';
}
