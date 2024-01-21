//In TypeScript, the term "type queries" refers to a way of obtaining the type of variable or property in the form of a type.
// TypeScript allows you to use the typeof operator to create a type query.
// When you use typeof followed by a variable or expression,
// TypeScript infers the type of that variable or expression and creates a type that represents it.

let x = 10;
let y: typeof x; // y is now of type number
let obj = { name: "John", age: 30 };
let objType: typeof obj; // objType is now of type { name: string, age: number }



interface PersonInt {
  name: string;
  age: number;
}

type PersonKeys = keyof PersonInt; // PersonKeys is "name" | "age"
type PersonTypes = { [K in PersonKeys]: typeof PersonInt[K] };
const PersonInt: PersonInt = { name: "Alice", age: 25 };
const typedPerson: PersonTypes = {
  name: "Bob", // Error: Type 'string' is not assignable to type 'never'.
  age: 30
};
console.log('PersonInt', PersonInt)
console.log('typedPerson', typedPerson)
