let sales=+prompt("enter sales done by employee");
switch(true){
case (sales<=5000):
    console.log(`comission of ${sales} is`,sales/2);
    break;
case (sales<=10000):
    console.log(`comission of ${sales} is`,(5000/2)+(sales/5));
    break;
case (sales<=20000):
    console.log(`comission of ${sales} is`,(5000/2)+(10000/2)+sales/7);
    break;
case (sales>=20000):
    console.log(`comission of ${sales} is`,(5000/2)+(10000/2)+(20000/2)+sales/10);
    break;


}

