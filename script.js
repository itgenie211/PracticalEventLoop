console.log("Hey Chanel!"); 
//PART 1 StackOverflow
// Declaring Global scope
window.counter = 0;
// function  and surrounf with try/catch
try {
    function foo () {
        window.counter++;
        return foo ();
    }
    setTimeout(function() {console.log(window.counter);}, 1000);
    foo();
}
catch(err) {
    console.log('Error has occured:' + err.stack); // prints 12
}

//PART 2 Trampolines
//Step One: write the recursive function.

let sum = 0;
for (let i = 0; i < 1000; ++i) sum += i;
console.log(sum); //recursive call

// * Step Two: modify the recursive function.
// const facto = function(i, sum) {
//     if (i < 1000){
//         sum += i;
//         return loop(i + 1, sum);
//       } else {
//         return sum;
//       }
// };
// console.log(facto(0, 0));
  
//  Step Three: create a trampoline function.
// const factoNew = (f, ...args) => {
//     let result = f(...args);
//     while (typeof result === "function") {
//       result = result();
//     }
//     return result;
//   };

//   const trampolined = trampoline(function increment(test) {
//     try {
//       if (test > 10000) return test;
  
//       return () => increment(++test);
//     } catch {
//       console.log("test===>", test);
//     }
//   });
// console.log(trampoline(facto(1000)));


// const loop = function(i, sum){
//     if (i < 1000){
//       sum += i;
//       let newMath = ()=>{return loop(i + 1, sum)};
//       return newMath; 
//     } else {
//       return sum;
//     }
//   };
   
  
//   const trampoline = function(){
//     let tv = loop(0, 0);
//     while (typeof tv === 'function'){
//       tv = tv(); // returns either a thunk function or a value
//     }
//     return tv;
//   };
//   console.log(trampoline()); 
//PART 3 Deferred Execution

function isPrime(n) {
  // since 0 and 1 is not prime return false.
  if (n == 1 || n == 0) return false;
  // Run a loop from 2 to n-1
  for (let i = 2; i < n; i++) {
      if (n % i == 0) return false;
  }
  return true;
}

let n = 10000;
// check for every number from 1 to N
let result = [];
for (let i = 1; i <= n; i++) {
  // check if current number is prime
  if (isPrime(i)) {
      result.push(i);
  }
}
console.log(result);

let timeout;
function myFunction() {
  timeout = setTimeout(alertFunc, 3000);
}
function alertFunc() {
  alert("Hello! The calculation is finished.");
};