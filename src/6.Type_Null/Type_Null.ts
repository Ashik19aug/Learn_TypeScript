//In TypeScript, the null and undefined values are part of the type-system.
// By default, a variable of any type can be assigned null or undefined.
// If you want to disallow these values, you can use the strictNullChecks compiler option.

function greet(name:string | null) {
  if(name)
    console.log('Hello ', name)
  else
    console.log('Please enter a valid name')
}

greet('Ashik');
greet(null);
