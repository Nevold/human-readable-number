module.exports = function toReadable (number) {
    let numberResult='';
    const numberList = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred"
    };
    let countDoz=number-number%10;
    let countTh=number-number%100;
   if (number <= 20){
     numberResult=numberList[number];
     }
     else if (number > 20 && number <=99 && number%10 ==0 ){
        numberResult=numberList[countDoz] ;
      }

    else if (number > 20 && number <=99 ){
     numberResult=numberList[countDoz] + ' ' + numberList[number%10];
   }
   else if (number > 99 && (number-number%10) == number && (number%100) > 0  ){
     numberResult=numberList[Math.floor(number/100)]+' '+numberList[100] + ' ' + numberList[number%100-number%10];
   }

   else if (number > 99 && (number%100) == 0 ){
    numberResult=numberList[Math.floor(number/100)]+' '+numberList[100]; 
  }

   else if (number > 99 && (number%100) <= 19 && (number%100) > 0){
     numberResult=numberList[Math.floor(number/100)]+' '+numberList[100] + ' ' + numberList[number%100] ;
   }

    else if (number > 99 ){
     numberResult=numberList[Math.floor(number/100)]+' '+numberList[100] + ' ' + numberList[number%100-number%10]+' '+ numberList[number%10];
   }
  return numberResult;
}
