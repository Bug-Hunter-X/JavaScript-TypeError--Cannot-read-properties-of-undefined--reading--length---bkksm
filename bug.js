function foo(x){
  if (x == null) {
    return 0; // Handle null and undefined cases
  }
  return x.length; // This will cause an error if x is not an array or string
}

console.log(foo([1,2,3])); //Output 3
console.log(foo(null)); //Output 0
console.log(foo(undefined)); //Output 0
console.log(foo(5)); //Output: TypeError: Cannot read properties of undefined (reading 'length')
console.log(foo({a:1,b:2})); //Output: TypeError: Cannot read properties of undefined (reading 'length')