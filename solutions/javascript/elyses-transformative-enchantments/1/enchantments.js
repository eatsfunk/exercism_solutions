export function seeingDouble(deck) {
  return deck.map((card) => card * 2);
}

export function threeOfEachThree(deck) {
  return deck.reduce((accumulator, currentValue) => {
      if (currentValue == 3) { for(let i = 0; i < 3; i++) { accumulator.push(3) }} 
      else { accumulator.push(currentValue) }
      return accumulator;
    }, [] );
}

export function middleTwo(deck) {
  return deck.slice(4,6);
}

export function sandwichTrick(deck) {
  let first = deck.splice(0,1)[0];
  let last = deck.splice(-1)[0];
  let half = deck.length / 2;
  deck.splice(half, 0, last, first);
  return deck;
}

export function twoIsSpecial(deck) {
  return deck.filter((card) => card === 2);
}

export function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b);
}

export function reorder(deck) {
  return deck.reverse();
}
