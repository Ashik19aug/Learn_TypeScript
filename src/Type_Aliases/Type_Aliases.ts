// In TypeScript, type aliases allow you to create a custom name for any type.
// This can be especially useful when you have complex types or when you want to reuse types in multiple places.
// You can create a type alias using the type keyword.

// Creating a type alias for a person object
type Person = { name: string; age: number; isActive: boolean; };
// Using the type alias
let person: Person = {name: "John", age: 25, isActive: true,};
console.log('Person : ', person);

// Union type alias
type Result = number | string;
let value: Result = 42;
value = "hello";
console.log("Result Type value : ", value);
// Function type alias
type MathOperation = (a: number, b: number) => number;
let add: MathOperation = (a, b) => a + b;
let subtract: MathOperation = (a, b) => a - b;
console.log('add function call result : ',  add(5,6));
console.log('subtract function call result : ',  subtract(5,2));
