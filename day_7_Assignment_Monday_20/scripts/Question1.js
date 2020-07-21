console.log("Question 1");
let num=+prompt("enter a number");
let arr=[];
for(let i=1;i<=num;i++){
    arr.push(i);
}
console.log(arr);
let oddarr=arr.filter((ele)=>ele%2!=0);
console.log(oddarr);
let cubearr=oddarr.map(ele=>ele**3);
console.log(cubearr);
