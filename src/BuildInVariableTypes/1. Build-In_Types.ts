
let NumberValue : number = 10;

let StringValue : string = 'string';

let BooleanValue : boolean = false;

let NullValue : null = null;

let UndefinedValue : undefined = undefined;

// Define object properties on declaration
let ObjectValueOnDeclaration : {name:string, age:number, adult:boolean, address:null, phone:undefined} = {
  name : 'Ashik Shafayet',
  age : 30,
  adult : true,
  address : null,
  phone :undefined
};

// Create a new object using the interface
interface student {
  name : string;
  age : number;
  rollNo : number;
  active : boolean;
  className : string;
  topRank ?: number; // ? to indicate it is a optimal value
}

let studentObjectValue : student = {name : 'Ashik Shafayet', age : 30, rollNo: 43, active: true, className: 'A'};

console.log('NumberValue : ', NumberValue);
console.log("StringValue : ", StringValue);
console.log("BooleanValue : ", BooleanValue);
console.log("NullValue : ", NullValue);
console.log("UndefinedValue : ", UndefinedValue);
console.log("ObjectValueOnDeclaration : ", ObjectValueOnDeclaration);
console.log("studentObjectValue : ", studentObjectValue);
