console.time("global time")
console.group("first group");
console.time("checking time");
console.log("to display anything on console");
console.warn("to print warnings in console");
console.error("to display errors in console mostly used in exceptions");
console.timeEnd("checking time");
console.groupEnd("first group");
// console.clear(); used to clear the console screen
console.log("\n %c checking css in console with purple color", style ="color:purple");
let obj={a:1, b:2, c:3};
let a="danish";
let b=8;
console.table(obj);
console.log({a,b,obj});
console.timeEnd("global time")
