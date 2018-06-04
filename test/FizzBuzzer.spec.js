describe("FizzBuzzWhiz", function () {

    describe("Given a natural number greater than 0 and divisible by 3", function () {
        [{ number: 12, result: "Fizz" },
        { number: 6, result: "Fizz" },
        { number: 9, result: "Fizz" }]
            .forEach(function (element) {
                it("should return fizz", function () {
                    // arrange
                    var fizzBuzzWhiz = new FizzBuzzWhiz();
                    var input = element.number;
                    // act
                    var actual = fizzBuzzWhiz.fizzBuzzer(input);
                    // assert
                    var expected = element.result;
                    expect(actual).toBe(expected);
                });

            })
    });

    describe("Given a natural number greater than 0 and divisible by 5", function () {
        [{ number: 20, result: "Buzz" },
        { number: 10, result: "Buzz" },
        { number: 55, result: "Buzz" }]
            .forEach(function (element) {
                it("should return Buzz", function () {
                    // arrange
                    var fizzBuzzWhiz = new FizzBuzzWhiz();
                    var input = element.number;
                    // act
                    var actual = fizzBuzzWhiz.fizzBuzzer(input);
                    // assert
                    var expected = element.result;
                    expect(actual).toBe(expected);
                });

            })
    });

    describe("Given a natural number greater than 0 and divisible by both 3 and 5", function () {
        [{ number: 15, result: "FizzBuzz" },
        { number: 30, result: "FizzBuzz" },
        { number: 75, result: "FizzBuzz" }]
            .forEach(function (element) {
                it("should return FizzBuzz", function () {
                    // arrange
                    var fizzBuzzWhiz = new FizzBuzzWhiz();
                    var input = element.number;
                    // act
                    var actual = fizzBuzzWhiz.fizzBuzzer(input);
                    // assert
                    var expected = element.result;
                    expect(actual).toBe(expected);
                });

            })
    });

    describe("Given a natural number greater than 0 and not divisible by both 3 and 5", function () {
        [{ number: 8, result: 8 },
        { number: 16, result: 16 },
        { number: 4, result: 4 }]
            .forEach(function (element) {
                it("should return number", function () {
                    // arrange
                    var fizzBuzzWhiz = new FizzBuzzWhiz();
                    var input = element.number;
                    // act
                    var actual = fizzBuzzWhiz.fizzBuzzer(input);
                    // assert
                    var expected = element.result;
                    expect(actual).toBe(expected);
                });

            })
    });

    describe("Given a prime number not 3 or 5", function () {
        [{ number: 2, result: "Whiz" },
        { number: 13, result: "Whiz" },
        { number: 7, result: "Whiz" }]
            .forEach(function (element) {
                it("should return Whiz", function () {
                    // arrange
                    var fizzBuzzWhiz = new FizzBuzzWhiz();
                    var input = element.number;
                    // act
                    var actual = fizzBuzzWhiz.fizzBuzzer(input);
                    // assert
                    var expected = element.result;
                    expect(actual).toBe(expected);
                });

            })
    });

    describe("Given a prime number 3 ", function () {
        [{ number: 3, result: "FizzWhiz" }]
            .forEach(function (element) {
                it("should return FizzWhiz", function () {
                    // arrange
                    var fizzBuzzWhiz = new FizzBuzzWhiz();
                    var input = element.number;
                    // act
                    var actual = fizzBuzzWhiz.fizzBuzzer(input);
                    // assert
                    var expected = element.result;
                    expect(actual).toBe(expected);
                });

            })
    });
    describe("Given a prime number 5 ", function () {
        [{ number:5, result: "BuzzWhiz" }]
            .forEach(function (element) {
                it("should return BuzzWhiz", function () {
                    // arrange
                    var fizzBuzzWhiz = new FizzBuzzWhiz();
                    var input = element.number;
                    // act
                    var actual = fizzBuzzWhiz.fizzBuzzer(input);
                    // assert
                    var expected = element.result;
                    expect(actual).toBe(expected);
                });

            })
    });
});

