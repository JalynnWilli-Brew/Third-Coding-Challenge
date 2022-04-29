//1
const myFunction = function (num1, num2) {
    return num1 + num2;
};

// //Arrow Function

arrowMyFunction = (num1, num2) => num1 + num2
console.log(arrowMyFunction(10, 5));


//2 Convert the following function into a 0ne-line arrow function w/o a return statement.
const add100 = function (money) {
    return money + 100;
};

//One-line arrow

arrowAdd100 = money => (money + 100);

//3
function countLetters(string, a){
    let count = 0;

    for(let i = 0; i < string.length; i++){
        if (string.charAt(i) == a){
            count += 1;
        }
    }
return count;
}

const string = prompt('Hello my name is Jalynn');
const letterToCheck = prompt('a')
const result = countLetters(string, letterToCheck)
console.log(result);