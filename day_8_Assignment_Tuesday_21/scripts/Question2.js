let num=+prompt("enter a number");
let list=document.getElementById('list');
document.getElementById('table').innerText=(`table of ${num}`);

for(i=1;i<=10;i++){
    
    let res=num*i;
            
        list.innerHTML+=(`<li>${num} * ${i} = ${res}</li>`)
    
        
        
    }
