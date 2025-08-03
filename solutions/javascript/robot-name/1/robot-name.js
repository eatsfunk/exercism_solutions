const usedNames = new Set();

export class Robot {
  #name; // Private field to store the robot's name

  constructor() {
    this.reset(); // Set initial name
  }

  // generate random alphabetic character
  #randAlph() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  }

  // generate random digit
  #randDig() {
    return Math.floor(Math.random() * 10);
  }

  // generate a random name that matches /^[A-Z]{2}\d{3}$/
  #randName() {
    return this.#randAlph() + this.#randAlph() + this.#randDig() + this.#randDig() + this.#randDig();
  }

  // Public getter to access name
  get name() {
    return this.#name;
  }

  // Public method to reset robot's name
  reset() {
    let newName;
    do {
      newName = this.#randName();
    } while (usedNames.has(newName));
    usedNames.add(newName);
    this.#name = newName; // Update the private field
  }

  // Static method to release all names (placeholder implementation)
  static releaseNames() {
    usedNames.clear();
  }
}
