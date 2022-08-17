const { describe } = require("yargs");
const { stringLength } = require("./index");
const { reverseString } = require("./index");
const { Calculator } = require("./index");
const { capitalizeString } = require("./index");

const str = "";
const str1 = "hello it's me";
const lowercase = "rebaz";
const calc = new Calculator();

// Task 1
// test String Length function

test("returns string length", () => {
  expect(stringLength("hello")).toBe(5);
});

test("throws error if string length is less than 0 or greater than 10", () => {
  expect((str) => stringLength()).toThrow(Error);
  expect((str1) => stringLength()).toThrow(Error);
});

// Task 2
// test Reverse String function
test("returns reversed string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("hello it's me")).toBe("em s'ti olleh");
});

// Task 3
// test Calculator class

// test add function

test("returns sum of two numbers", () => {
  expect(calc.add(1, 2)).toBe(3);
});
test("returns sum of two numbers", () => {
  expect(calc.add(2, 3)).toBe(5);
});
test("returns sum of two numbers", () => {
  expect(calc.add(3, 4)).toBe(7);
});

// test subtract function

test("returns difference of two numbers", () => {
  expect(calc.subtract(1, 2)).toBe(-1);
});
test("returns difference of two numbers", () => {
  expect(calc.subtract(6, 2)).toBe(4);
});
test("throws error if subtracting a negative number", () => {
  expect(() => calc.subtract(-1, 2)).toThrow(Error);
});

// test multiply function

test("returns product of two numbers", () => {
  expect(calc.multiply(1, 2)).toBe(2);
});
test("returns product of two numbers", () => {
  expect(calc.multiply(1, 4)).toBe(4);
});
test("returns product of two numbers", () => {
  expect(calc.multiply(6, 2)).toBe(12);
});

// test divide function

test("divides two numbers", () => {
  const calc = new Calculator();
  expect(calc.divide(6, 2)).toBe(3);
});
test("throws error if dividing by 0", () => {
  const calc = new Calculator();
  expect((calc) => calc.divide(6, 0)).toThrow(Error);
});
test("throws error if 0 is being divided by a number", () => {
  const calc = new Calculator();
  expect((calc) => calc.divide(0, 6)).toThrow(Error);
});

// Task 4
// test Capitalized String function
test("returns capitalized string", () => {
  expect(capitalizeString(lowercase)).toBe("Rebaz");
  expect(capitalizeString(str1)).toBe("Hello it's me");
  expect((str) => capitalizeString()).toThrow(Error);
});
