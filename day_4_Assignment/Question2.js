console.log("%c methods","color:red;background-color:yellow");
let text="The quick brown Fox jumps over the lazy Dog. If Dog reacted is it really a lazy";
console.log(`text is ${text}. 
and substring parameters are 10 and 14`);
console.log("sub string:",text.substring(10,15));

console.log("slice:",text.slice(4,9));

console.log("replace dog with cat"+ text.replace("Dog","Cat"));

console.log("replace all dog with cat"+ text.replace(/Dog/g,"Cat"));

console.log("%c Array methods","color:red;background-color:yellow");
let arr=[1,10,63,9,4,38,];
console.log("Array is: ",arr);
arr.splice(1,0,50);
console.log("Array splice with 50 at position 1 ",arr);
console.log("Alphabaticaly sorted array: ",arr.sort());

 arr.sort(function(a, b){return a - b});
  console.log("Numeric sorted array: ",arr);

