// Array slice
const number = [2,4, 5, 2,8, 9, 23, 10, 34];
const part = number.slice(1, 4);
console.log(part);
// Array splice
const number1 = [3, 5, 2, 5, 6, 8, 10, 34, 23, 6];
const remove = number1.splice(2, 7, 23, 45);
console.log(remove);

// Array join
const number2 = [2, 4, 5, 1, 5, 6, 6];
const add = number2.join("id");
console.log(add);
// example Array
const num1 = [2, 3, 6, 7, 6, 9, 7];
const sum = num1.shift(4);
console.log(sum);



