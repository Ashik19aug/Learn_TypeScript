//In TypeScript, a union type allows you to use a value that can be of one of several types.
// You use the | (pipe) operator to create a union type.

// Union type alias
type ResultType = number | string; // Result type is a union type
let valueData: ResultType = 42;
valueData = "hello";
console.log("ResultType Union valueData : ", valueData);


// Union type with multiple types
type Status = "success" | "error" | "pending";

// Using the union type
let currentStatus: Status;
currentStatus = "success";  // Valid
currentStatus = "error";    // Valid
// currentStatus = "unknown"; // Error, as "unknown" is not part of the union type
