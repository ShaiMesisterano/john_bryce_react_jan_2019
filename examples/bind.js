const sum = (x, y) => x + y;
const num = 7;
const addNum = sum.bind(null, num); // context = null / x = num

console.log(addNum(3)); // y = 3
// console.log(addOne(15));
// console.log(addOne(82));