function greaterNum(num1,num2) {
  if (num1 > num2) {
    return num1 + " is greater than " + num2;
  } else if (num2 > num1) {
    return num2 + " is greater than " + num1;
  } else {
    return "The numbers are equal.";
  }
}

console.log(greaterNum(3, 5));
console.log(greaterNum(10, 2));
console.log(greaterNum(7, 7));