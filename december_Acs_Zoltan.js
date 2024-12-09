//Feladat 1

const getMiddle = s => s.substr(s.length - 1 >>> 1, (~s.length & 1) + 1);

console.log(getMiddle("middle"))
console.log(getMiddle("asd"))

// Feladat 2

function isSquare(num) {
    if (num <= 0 || typeof num !== "number") {
        return false;
    }

    const sqrt = Math.sqrt(num);
    return Number.isInteger(sqrt);
}

const num1 = 16;
const num2 = 9;
const num3 = 15;

console.log(isSquare(num1))
console.log(isSquare(num2))
console.log(isSquare(num3))

// Feladat 3

const stringClean = s => s.replace( /\d/g, "" ) ;

console.log(stringClean("It's a5 ni1ce d4ay no0t to g3et any ba9d marks5, i1sn't 1it? c:"))

// Feladat 4

function bmi(weight, height) {
    var result = weight/Math.pow(height,2) 
    
    if (result <= 18.5) {
      return "Underweight";
    } else if (result <= 25) {
      return "Normal";
    } else if (result <= 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
    
  }