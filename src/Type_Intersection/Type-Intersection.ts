//In TypeScript, an intersection type is a way to combine multiple types into a single type
// that has all the features of each individual type.
// You use the & (ampersand) operator to create an intersection type.

// Defining two types
type EmployeeInfo = { name: string; age: number; };

type Employee = { employeeId: string; position: string; };

// Creating an intersection type
type EmployeeWithPersonInfo = EmployeeInfo & Employee;
// Using the intersection type
let employeeDetails: EmployeeWithPersonInfo = {
  name: "John",
  age: 25,
  employeeId: "12345",
  position: "Software Engineer",
};
console.log('Employee Details : ', employeeDetails);
