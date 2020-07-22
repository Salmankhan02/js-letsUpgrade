let name=prompt("enter your name");
document.getElementById('welcome').innerHTML=(`Welcome ${name}!!`);
function clock(){
let clock=document.getElementById('clock');
let date=new Date();
let time=date.toLocaleTimeString();

clock.innerText=time;
}
setInterval(clock, 1000);