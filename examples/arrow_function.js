// function sum(x,y){
//     return x + y;
// }

// console.log(sum(2,4));

// const sum = (x, y) => {
//     return x + y;
// }
// const sum = (x, y) => x + y;
// console.log(sum(5,2));
let arr = [1,2,3,4];
// const printHelloWorld = () => console.log("Hello World");
const getEven = num => num % 2 === 0;
const printEven = arr.filter( getEven );
console.log(printEven);