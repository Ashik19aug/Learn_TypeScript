// In TypeScript, a tuple is a type that allows you to express an array with a fixed number of elements,
// where each element has a specific, known type.
// Tuples are similar to arrays but have a fixed size and the types of their elements are known at compile time.

// Declaring a tuple with three elements of different types
let Person: [string, number, boolean] = ["John", 25, true];
// Accessing elements by index
let PersonName: string = Person[0];
let PersonAge: number = Person[1];
let PersonIsActive: boolean = Person[2];
console.log("person details: " , PersonName , PersonAge , PersonIsActive); //output (person details:  John 25 true)


type PersonTuple = [string, number, boolean];
let PersonTupleAssign: PersonTuple = ["John", 25, true];
console.log("person tuple assign: " , PersonTupleAssign); //output (person tuple assign: ['john' , 25, true])
