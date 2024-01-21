// =================================================================================================================
//In TypeScript, a literal type is a type that represents a specific value, rather than a range of values.
// Literal types can be used with string literals, numeric literals, boolean literals, and more.
// They allow you to specify exactly which values are allowed for a particular variable or parameter.
// =================================================================================================================
//Literal types are often used in conjunction with union types to specify a set of allowed values
// for a variable, parameter, or property. They provide a way to be more precise about the expected values in your code,
// and the TypeScript compiler can catch potential errors by enforcing these specific values.
// =================================================================================================================
let color: "red" | "green" | "blue";
color = "red";    // Valid
// color = "yellow"; // Error, as "yellow" is not part of the literal type

let age: 25 | 30 | 35;
age = 30;    // Valid
// age = 40;   // Error, as 40 is not part of the literal type

let isActive: true | false;
isActive = true;   // Valid
// isActive = null; // Error, as null is not part of the literal type


// Using union type with literal types
type StatusType = "success" | "error" | "pending";
let currentStatusValue: StatusType;
currentStatusValue = "success";  // Valid
// currentStatus = "unknown"; // Error, as "unknown" is not part of the literal type
