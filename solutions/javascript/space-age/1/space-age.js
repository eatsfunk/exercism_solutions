//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const age = (planet, seconds) => {

  let earthYears = seconds / 31557600
  
  let factor;
    if (planet == 'mercury') {
      return Math.round(earthYears * 100 / 0.2408467) / 100
    }
    if (planet == 'venus') {
      return Math.round(earthYears * 100 / 0.61519726) / 100
    }
    if (planet == 'earth') {
      return Math.round(earthYears * 100 / 1.0) / 100
    }
    if (planet == 'mars') {
      return Math.round(earthYears * 100 / 1.8808158) / 100
    }
    if (planet == 'jupiter') {
      return Math.round(earthYears * 100 / 11.862615) / 100
    }
    if (planet == 'saturn') {
      return Math.round(earthYears * 100 / 29.447498) / 100
    }
    if (planet == 'uranus') {
      return Math.round(earthYears * 100 / 84.016846) / 100
    }
    if (planet == 'neptune') {
      return Math.round(earthYears * 100 / 164.79132) / 100
    }
    
};
