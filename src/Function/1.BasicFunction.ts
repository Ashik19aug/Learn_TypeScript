
function sum(value: number, value_b: number): number {
  return value+value_b;
}
//call sum function to calculate the sum
let calculateSum = sum(3,4);
console.log("calculate Sum", calculateSum); //OUTPUT: calculate Sum 7

// we can make those parameters optional by assigning a default value
function sumOptional(value: number, value_b: number = 5): number {
  return value+value_b;
}
let calculateSumOptional = sumOptional(3, 3);
let calculateSumOptional_b = sumOptional(3);
console.log('calculateSumOptional', calculateSumOptional); //OUTPUT: calculateSumOptional 6
console.log('calculateSumOptional_b', calculateSumOptional_b); //OUTPUT: calculateSumOptional_b 8
