var customerNames = [];
customerNames.push('joe');
customerNames.push('sally');
customerNames.push(1);

for(let i = 0; i < customerNames.length; i++)
{
    console.log(customerNames[i]);
}

for(let name of customerNames)
{
    console.log(name);
}

let fullName = "Ethan" + " Boettcher";
let gradeArray = [100, 79, 80, 90, 100];

console.log('\n\nStudent: ' + fullName);
console.log("Grades: ");
for ( let i = 0; i < gradeArray.length; i++)
{
    console.log((i+1) + ":" + gradeArray[i]);
}