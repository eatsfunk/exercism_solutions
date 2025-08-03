'use strict'

export class GradeSchool {
  
  #school;
  
  constructor() {
    this.#school = {};
  }
  
  roster() {
    // Create a deep copy of the #school object to ensure immutability
    return JSON.parse(JSON.stringify(this.#school));
  }

  add(name, grade) {
    // Ensure a student is not in multiple grades
    for (const key in this.#school) {
      const index = this.#school[key].indexOf(name);
      if (index !== -1) {
        // Student found in another grade; remove them
        this.#school[key].splice(index, 1);
      }
    }
    // Add the student to the specified grade
    if (!(grade in this.#school)) {
      this.#school[grade] = [];
    }
    if (!this.#school[grade].includes(name)) {
      this.#school[grade].push(name);
      this.#school[grade].sort();
    }
  }

  grade(grade) {
    if(grade in this.#school == false) {
      return [];
    } else {
      return JSON.parse(JSON.stringify(this.#school[grade]));
    }
  }
}
