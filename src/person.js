class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  upperCaseName() {
    this.name = this.name.upperCaseName();
  }
}

module.exports = Person;