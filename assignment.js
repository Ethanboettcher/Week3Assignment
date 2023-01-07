//create an array called ages that contains the following values
//3, 9, 23, 64, 2, 8, 28, 93. 
//programmatically subtract the value of the first element in the array
//from the last value in the last element of the array
//add a new age to your array and repeat the step above
//use a loop to iterate through the array and calculate the average age.

const ages = [3, 9, 23, 64, 2, 8, 28, 93];
let length1 = ages.map(function(element){
    return element.length;
});
console.log(ages[ages.length - 1] - ages[0]);
ages.push(12);
console.log(ages);
console.log(ages[ages.length - 1] - ages[0]);

let total = 0;
let counter = 0;

for (let i = 0; i < ages.length; i++){
    counter++;
    total += ages[i];
}
let avr = total / counter;
console.log(avr);

//Create an array called names that contains the following:
//'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//use a loop to iterate through the array and calculate the
//average number of letters per name.
//use a loop to iterate through the array and again and concatenate
//all the names together, seperated by spaces.

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let lengths = names.map(function(element){
    return element.length;
});
console.log(lengths);

let sum = lengths.reduce(function(accumulator, currentValue){
   return accumulator + currentValue;
});
console.log(sum);

for(let i = 0; i < names.length; i++){
    var avg = sum/names.length;
    console.log(avg);
}
for(let i = 0; i < names.length; i++){
    console.log(names.join(', '));
}


//how do you access the last element of an array?
//get(index) method by passing index = size -1

//how do you access the first element of an array?
//get(index) method by passing index = 0

//Create a new array called nameLengths. Write a loop to iterate
//over the previously created names array and add the length of 
//each name to the nameLengths array.
//namesArray =['Kelly', 'Sam', 'Kate',]// given this array
//nameLengths = [5, 3, 4]// create this new rray

var nameLengths = [lengths];
for(i = 0; i <= lengths; i++){
} console.log(lengths);

//write a function that takes two parameters, word and n, as arguments
//and returns the word concatenated to itself n number of tiems.
//(i.e. if I pass in 'Hello' and 3, I would expect the function
//to return 'HelloHelloHello').

var repeat = function(str, count) {
    var array = [];
    for(var i = 0; i < count;)
        array[i++] = str;
    return array.join('');
}
var repeatedString = repeat('Hello', 3);
console.log(repeatedString);

//write a function that takes two parameters. firstName and lastName,
//and returns a full name.

function fullName(firstName, lastName){
    console.log(firstName + ' ' + lastName);
}
fullName('Ethan', 'Boettcher');

//write a function that takes an array of numbers and returns true
//if the sum of all the numbers in the array is greater than 100.

list = [31, 7, 13, 22, 50];
function over_100(){
    for (let i = 0; i < 100; i++){
        return false;
    }return true;
}
console.log(over_100(list));

//Write a function that takes an array of numbers and returns
//average of all the elements in the array.

function average(list){
    var total = list.reduce((acc, c) => acc + c, 0);
    return total / list.length;
}
console.log(average(list));

//Write a function that takes two arrays of numbers and returns true
//if the average of the elements in the first array is greater than
//the average of the elements in the second array

var arry1 = [1, 2, 10, 11, 7]
var arry2 = [1, 2, 3, 4]

function compareArry(arry1, arry2){
    if(arry1 > arry2)
    return true;
}
console.log(compareArry(arry1, arry2));

//Write a function called willBuyDrink that takes a boolean isHotOutside,
//and a number moneyInPocket and returns if it is hot outside and if
//MoneyInPocket is greater than 10.50

let isHotOutside = true;
let moneyInPocket = 30;

function willBuyDrink(){
    if(isHotOutside && moneyInPocket > 10.50){
    console.log(true);
}else 
console.log(false);}
willBuyDrink();

//create a function of your own that solves a problem.
//why create and what do

function lbsToKil(l){
    return (l * 0.45359237);
}
console.log(lbsToKil(170));