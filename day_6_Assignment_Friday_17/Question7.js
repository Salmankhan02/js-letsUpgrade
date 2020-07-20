let num=prompt("enter a number");
var prime;

if(num==2 || num==1){
    console.log(`${num} is prime`);
    prime=false;
}
else{
for(let i=2;i<num;i++){
    if(num%i==0){
        console.log(`${num} is not prime`);
        break; 
        
    }
    else{
        console.log(`${num} is prime`);
        prime=false;
        break;
    }
}
}


if(prime==false){
    console.log(`prime series till ${num}: `);
    if(num==1){
        console.log(`${num}`);
        
    }
    else if(num==2){
        let p=1;
        console.log(p);
        
        console.log(`${num}`);
        
    }
    else {
        let p=1;
        console.log(p);
        console.log(++p)
    for(let i=1;i<=num;i++){
        for(let j=2;j<i;j++){
            if(i%j==0){
                break;
            }
            else{
                console.log(i);
                break;
            }
        }
    }
}
}
