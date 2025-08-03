export function totalBirdCount(birdsPerDay) {
  let total = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    total += birdsPerDay[i];
  }
  return total;
}

export function birdsInWeek(birdsPerDay, week) {
  let total = 0;
  for (let day = week * 7 - 7; day < week * 7; day++ ) {
    total += birdsPerDay[day];
  }
  return total;
} 

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i+=2) {
    birdsPerDay[i]++;
  }
  return birdsPerDay;
}
