/* export function getFirstCard(deck) {
  const [first, ...rest] = deck;
  return first;
}

export function getSecondCard(deck) {
  const [first, second, ...rest] = deck;
  return second;
}

export function swapTopTwoCards(deck) {
  const [first, second, ...rest] = deck;
  return [second, first, ...rest];
}

export function discardTopCard(deck) {
  const [first, ...rest] = deck;
  return [first, rest];
}

const FACE_CARDS = ['jack', 'queen', 'king'];

export function insertFaceCards(deck) {
  const [first, ...rest] = deck;
  return [first, ...FACE_CARDS, ...rest];
} */

export function getFirstCard([first, ...rest]) {
  return first;
}

export function getSecondCard([, second, ...rest]) {
  return second;
}

export function swapTopTwoCards([first, second, ...rest]) {
  return [second, first, ...rest];
}

export function discardTopCard([first, ...rest]) {
  return [first, rest];
}

const FACE_CARDS = ['jack', 'queen', 'king'];

export function insertFaceCards([first, ...rest]) {
  return [first, ...FACE_CARDS, ...rest];
}

