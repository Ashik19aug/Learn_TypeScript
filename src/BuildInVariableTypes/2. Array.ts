//TypeScript Array Example

let ArrayNumberValue:number[] = [1, 2, 3, 4, 5]; // all elements must be numbers

let ArrayStringValue:string[] = ["apple", "banana", "orange"]; // all elements must be strings

let ArrayNumAndStr : (number|string)[] = [1, "two", 3, "four", 5]; // elements can be either numbers or strings

let ArrayConstructorValue : Array<number> = [1, 2, 3, 4, 5]; //all elements must be numbers

console.log("NumberValue : ", ArrayNumberValue);
console.log("StringValue : ", ArrayStringValue);
console.log("ArrayValue : ", ArrayNumberValue);
console.log("ArrayConstructorValue : ", ArrayConstructorValue);
