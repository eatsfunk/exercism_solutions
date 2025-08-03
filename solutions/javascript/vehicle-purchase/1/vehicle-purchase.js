export function needsLicense(kind) {
  return kind == 'car' || kind == 'truck' ? true : false;
}

export function chooseVehicle(option1, option2) {
  let choice = option1 < option2 ?  option1 : option2;
  return choice + ' is clearly the better choice.';
}

export function calculateResellPrice(originalPrice, age) {
  switch (true) {
    case age < 3:
      return originalPrice * 0.8;
      break;
    case age > 10:
      return originalPrice * 0.5;
      break;
    default:
      return originalPrice * 0.7;
  };
}
