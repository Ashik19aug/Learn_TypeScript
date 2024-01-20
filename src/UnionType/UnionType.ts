// Union type alias
type ResultType = number | string; // Result type is a union type
let valueData: ResultType = 42;
valueData = "hello";
console.log("ResultType Union valueData : ", valueData);
