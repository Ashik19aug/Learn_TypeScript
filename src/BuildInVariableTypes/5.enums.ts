// In TypeScript, enums (short for enumerations) allow you to define a set of named constant values.
// Enums are helpful when you have a fixed set of values that are related, and you want to use meaningful names to represent them.

enum Color {// Enums in TypeScript are zero-based by default, so Color.Red is 0, Color.Green is 1, and Color.Blue is 2.
  Red,
  Green,
  Blue,
}
// Using the enum
let backgroundColor: Color = Color.Blue;
console.log('Background Color : ', backgroundColor);

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
let playerDirection: Direction = Direction.Right;
console.log('Player Direction : ', playerDirection);
