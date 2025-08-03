//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {
  deg = 0;
  coordinates = [0, 0];
  directions = {
      0: 'north',
      90: 'east',
      180: 'south',
      270: 'west'
    }
  degToBearing(deg) {
    deg %= 360;
    deg = deg < 0 ? 360 - Math.abs(deg) : deg;
    if (!deg in this.directions) throw new InvalidInputError();
    return this.directions[deg];
  }
  bearingToDeg(bearing) {
    let deg =  Object.keys(this.directions).find((v) => this.directions[v] === bearing);
    deg = Number(deg);
    return Number(deg);
  }
  get bearing() {
    return this.degToBearing(this.deg);
  }
  get coordinates() {
    return this.coordinates;
  }
  place(pos) { 
    if (!Object.values(this.directions).includes(pos.direction)) {
      throw new InvalidInputError();
    }
    this.coordinates = [pos.x, pos.y];
    this.deg = this.bearingToDeg(pos.direction);
  }

  evaluate(instructions) {
    for (let v of instructions) {
      
      if (v === 'R') {
        this.deg += 90;
      } else if (v === 'L') {
        this.deg -= 90;
      } else if (v === 'A') {
        
        switch (this.degToBearing(this.deg)) {
        case 'north':
          this.coordinates[1]++;
          break;
        case 'east': 
          this.coordinates[0]++;
          break;
        case 'south': 
          this.coordinates[1]--;
          break;
        case 'west': 
          this.coordinates[0]--;
          break;
        }
        
      } else {
        throw new InvalidInputError();
      }
    }
  }
}
