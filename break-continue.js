const number = [1,2,3,4,5,6,7,8,9];
for(i = 0; i <  number.length; i++){
    if(number[i] > 5){
        break;
    }
    // console.log(number[i]);
}

const num2 = [1,-2,3,4,-5,6,-7,-8,9];
for(i = 0; i <  num2.length; i++){
    if(num2[i] <0){
        continue;
    }
   console.log(number[i]);
}