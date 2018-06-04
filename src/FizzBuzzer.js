
function FizzBuzzWhiz() {

  fizzBuzzer = function (number) {
    if (number == 3) {
      return "FizzWhiz";
    }
    else if (number == 5) {
      return "BuzzWhiz";
    }
    else if (divisibleBy(15,number)) {
      return "FizzBuzz";
    }
    else if (divisibleBy(3,number)) {
      return "Fizz";
    }
    else if (divisibleBy(5,number)) {
      return "Buzz";
    }
    else if (isPrime(number)) {
      return "Whiz";
    }
    else {
      return number;
    }
  }

  divisibleBy = function(divisor,number){
        return number % divisor==0;
  }
  
  isPrime = function (number) {
    if (number == 2) {
      return true
    }
    for (var i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
      return true;
    }
  }

  return {
    fizzBuzzer
  }
}
