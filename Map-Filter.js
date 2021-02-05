const number = [3, 5, 6, 8, 2, 9, 4];

// const output = [];
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result = element * element;
//     output.push(result);

    
// }
// console.log(output);

// function square(element){
//     return element * element;
// }
// var result =  number.map(function(element){
//     return element * element;
// })
// console.log(result);
const result3 = number.map(x => x * x);
console.log(result3);

// const square = element => element * element;
// console.log(square);

const biggerNumber = number.filter( x => x >5);
console.log(biggerNumber);
const isThere = number.find(x => x >2);
console.log(isThere);

