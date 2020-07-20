const student = {
    name: "Helsinki",
    age: 24,
    projects:{
        diceGame:"Two player dice game using javascript"
    }
}
const {name,age,projects:{dictGame}}=student;
console.log(`name is ${name}
age is${age}
projects is ${dictGame}`);

