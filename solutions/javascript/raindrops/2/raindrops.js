export const convert = (num) => {
  let drops = new Map([ [3, 'Pling'], [5, 'Plang'], [7, 'Plong'] ])
  let sound = ''
  drops.forEach( (value, key) => num % key === 0 ? sound += value : '' )
  return sound ? sound : String(num)
};
