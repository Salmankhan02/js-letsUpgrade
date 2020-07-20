let sales=+prompt("enter sales done by employee");
switch(true){
case (sales<=5000):
    console.log("2% of ",sales," is",sales/2);
    break;
case (sales<=10000):
    console.log("5% of ",sales," is",sales/5);
    break;
case (sales<=20000):
    console.log("7% of ",sales," is",sales/7);
    break;
case (sales>=20000):
    console.log("10% of ",sales," is",sales/10);
    break;


}

