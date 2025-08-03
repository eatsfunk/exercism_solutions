
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
      return 1.5;
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

export function limesToCut(wedgesNeeded, limes) {
  let wedgesCount = 0;
  let limesCount = 0;
  
  limes.forEach(function (lime) {
    if (limesCount < limes.length && (wedgesCount < wedgesNeeded)) {
      switch (lime) {
        case 'small':
          wedgesCount += 6;
          limesCount += 1;
          break
        case 'medium':
          wedgesCount += 8;
          limesCount += 1;
          break
        case 'large':
          wedgesCount += 10;
          limesCount += 1;
          break
      }
      console.log('lime: ' + lime + ', ', 'wedges: ' + wedgesCount + ', ', 'limes: ' + limesCount);
    }
  })
  return limesCount;
}

export function remainingOrders(timeLeft, orders) {
  let accumulatedTime = 0;
  while (accumulatedTime < timeLeft && orders.length > 0) {
    let order = orders.shift();
    accumulatedTime += timeToMixJuice(order);
  }
  return orders;
}
