const Person = require('./index.js');

describe('Person', () => {
  test('Person is a class', () => {
    expect(typeof Person.prototype.constructor).toEqual('function');
  });
  test('Person has a name', () => {
    const person = new Person('David');
    expect(person.name).toEqual('David');
  });
  test('Person has an age', () => {
    const person = new Person('David', 45);
    expect(person.age).toEqual(45);
  });
  test('Person has a compareAge method', () => {
    const person = new Person('David', 45);
    expect(typeof person.compareAge).toEqual('function');
  });
  test('compareAge returns a string', () => {
    const person = new Person('David', 45);
    expect(typeof person.compareAge(new Person('John', 46))).toEqual('string');
  });
  test('compareAge returns a string indicating if the other person is older', () => {
    const person = new Person('David', 45);
    expect(person.compareAge(new Person('John', 46))).toEqual('John is older than me.');
    expect(person.compareAge(new Person('John', 44))).toEqual('John is younger than me.');
    expect(person.compareAge(new Person('John', 45))).toEqual('John is the same age as me.');
  });
});
