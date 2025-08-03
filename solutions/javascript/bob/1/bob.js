//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const isAllUppercase = str => str === str.toUpperCase();
  const hasNoLetters = str => str.toLowerCase() === str.toUpperCase();
  switch(true) {
    case (message.endsWith('?') && isAllUppercase(message) && !hasNoLetters(message)):
      return "Calm down, I know what I'm doing!";
      break;
    case message.trim().endsWith('?'):
      return 'Sure.';
      break;
    case isAllUppercase(message) && !hasNoLetters(message):
      return 'Whoa, chill out!';
      break;
    case message.trim().length === 0:
      return 'Fine. Be that way!';
      break;
    default:
      return 'Whatever.';
  }
};
