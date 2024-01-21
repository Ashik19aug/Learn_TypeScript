//In TypeScript, you can use the optional property access operator (?.)
// to safely access properties on objects that may be null or undefined.
// This operator is also known as the "nullish coalescing" operator.
// It prevents an error from being thrown if you try to access a property on an object that is null or undefined.


interface PersonObject {
  name?: {
    first: string;
    last: string;
  };
}

// Creating an object with optional properties
const PersonObjectValue: PersonObject | null = {
  name: {
    first: "John",
    last: "Doe",
  },
};

// Using optional property access operator
const firstName = PersonObjectValue?.name?.first;
console.log(firstName);  // Output: "John"

// If person is null or undefined, the result will be undefined
const lastName = PersonObjectValue?.name?.last;
console.log(lastName);   // Output: undefined
