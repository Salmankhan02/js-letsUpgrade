// using conditional statement
function conditional(){
let mark=+prompt("Enter Your Mark");
if(mark>100){
    console.log(`you entered wrong mark`);
}
else if (mark>=75) {
    console.log(`mark is ${mark} and grade is A`);
    
} 
else if(mark>=50){
    console.log(`mark is ${mark} and grade is B`);
}
else if(mark>=35){
    console.log(`mark is ${mark} and grade is C`);
}

else {
    console.log(`mark is ${mark} and you are fail`);

}
}

// // using switch cases
function switchcase(){
    let mark=+prompt("Enter Your Mark");
    switch (true) {
        case mark >100:
            console.log(`you entered wrong mark`);
            break;
        case mark >=75:
            console.log(`mark is ${mark} and grade is A`);
            break;
        case mark >=50:
            console.log(`mark is ${mark} and grade is B`);
            break;
        case mark >=35:
            console.log(`mark is ${mark} and grade is C`);
            break;
        default:
            console.log(`mark is ${mark} and you are fail`)
            break;
    }
}

// using ternary operator
function ternary() {
    let mark=+prompt("Enter Your Mark");

    mark>100 ? console.log(`you entered wrong mark`):
    mark>=75 ? console.log(`mark is ${mark} and grade is A`):
    mark>=50 ? console.log(`mark is ${mark} and grade is B`):
    mark>=35 ? console.log(`mark is ${mark} and grade is c`):
    console.log(`mark is ${mark} and you are fail`);
    
}