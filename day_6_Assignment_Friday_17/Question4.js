

let option=+prompt(`enter option do perform operations
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Square root
6. percentage`);
let numbers=prompt(`enter numbers with spaces in between`);
let number=numbers.split(" ");
//console.log(number[0],number[1]);
+number

switch (option) {
    case 1:
        console.log("addition is: ",+(number[0])+ +(number[1]));
        
        break;
    case 2:
        console.log("subtraction is: ",number[0]-number[1]);
        
        break;
    case 3:
        console.log("Multiplication is: ",number[0]*number[1]);
        break;
    case 4:
        console.log("Division is: ",number[0]/number[1]);
        break;
    case 5:
        console.log("Square root is: ",Math.sqrt(number));
        break;
    case 6:
        console.log("Percentage is: ",(number[0]/number[1])*100);
        break;

    default:
        console.log("choose correct option");
        
        break;
}