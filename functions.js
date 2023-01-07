function myFunction()
{
    for(let i = 0; i < 100; i++){
        console.log(i);
    }
}
myFunction();


//new function

function createFullName(firstName, lastName){
    return firstName + ' ' + lastName;
}
var fullName = createFullName('Ethan', 'Boettcher');
console.log('Welcome, ' + fullName);

console.log(fullName.toLowerCase());

//new function

function multiply(num1, num2){
    return num1*num2;
}
var sum = multiply(4, 6);
console.log(sum);

//new function

function checkCanDrive(age){
    return (age >= 16);
}

var currentAge = 16;
if(checkCanDrive(currentAge))
{
    console.log('This person can drive');
} else
{
    console.log('This person cannot legally drive');
}

//new function

let myFullName = "Ethan" + " Boettcher";
let gradeArray = [100, 79, 80, 90, 100];

function lowestGrade(gradeBook){
    if(gradeBook.length > 0){
        let lowGrade = gradeBook[0];
        for(let grade of gradeBook){
            if(grade < lowGrade){
                lowGrade = grade;
            }
        }
        return lowGrade;
    }else {
        return 0;
    }
}

console.log('\nStudent: ' + myFullName);
console.log('Grades: ');
for (let i = 0; i < gradeArray.length; i++){
    console.log('\t' + (i+1) + ': ' + gradeArray[i]);
}
console.log("Evaluation: ");
console.log('\tLowest Grade is: ' + lowestGrade(gradeArray));

//new function

var a = 'Awesome';

function speakFriend(a){
    if(a == 'Melon'){
        return = 'Enter';
    }
    return 'Access Denied';
}

//new function

var a = 11