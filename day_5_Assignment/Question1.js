function oddeven(num){
    return num%2?true:false;
}
var num=+prompt("Enter a number to check even and odd");
result=oddeven(num)
if(result){
    console.log(`number ${num} is odd`);
    
}
else{
    console.log(`number ${num} is even1`);
    
}