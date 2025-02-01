function foo(x){
  if (x === null || x === undefined) {
    return 0; // Handle null and undefined cases
  }
  if (typeof x === 'string' || Array.isArray(x)) {
    return x.length;
  } else {
    return 0; // or throw an error: throw new Error('Invalid input type');
  }
}

console.log(foo([1,2,3])); //Output 3
console.log(foo(null)); //Output 0
console.log(foo(undefined)); //Output 0
console.log(foo(5)); //Output: 0
console.log(foo({a:1,b:2})); //Output: 0