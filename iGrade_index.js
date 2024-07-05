const readline = require('readline');

//create an interface
rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('What is the student grade 0 - 100?',(input) => { 
    if (marks > 79) {
        console.log( "Grade: A");
    } 
    else if (marks >= 60) {
        console.log("Grade: B");
    } 
    else if (marks >= 49) {
        console.log("Grade: C");
    } 
    else if (marks >= 40) {
        console.log("Grade: D");
    } 
    else {
        console.log("Grade: E");
    }

    rl.close();
})

//readline didnt work

//prompt function 

 function gradeGenerator () {
    // Request grade
    const input = prompt("What is the student grade 0 - 100? ");
    let marks = Number(marks);

    if (marks > 79) {
        console.log(" Grade: A");
    } 
    else if (marks >= 60) {
        console.log("Grade: B");
    } 
    else if (marks >= 49) {
        console.log("Grade: C");
    } 
    else if (marks >= 40) {
        console.log("Grade: D");
    } 
    else {
        console.log("Grade: E");
    }
}
// Run the grade
 gradeGenerator();