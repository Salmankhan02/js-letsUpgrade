console.log("Question2");
class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.coin=0;
        this.course=[];
    }
    login() {
        console.log(`hey ${this.name} Welcome! You logged in successfuly`);
    }
    logout(){
        console.log(`${this.name} logged out`);
    }
    details(user){
        console.log(`Name: ${user.name}
Age: ${user.age}
E-mail: ${user.email}
coins: ${user.coin}
courses: ${user.course}`);
    }
}
class Moderator extends User{
    addCoin(user){
        user.coin++;
        console.log(`Coin is added total coins of ${user.name} are ${user.coin}`);
    }
    removeCoin(user){
        if(user.coin>0){
        user.coin--;
        console.log(`Coin is removed now total coins of ${user.name} are ${user.coin}`);
        }
        else{
            console.log(`You dont have any coin to remove`);
        }
    }
}
class Admin extends Moderator{
    addCourse(user,courseName){
        user.course.push(courseName);
        console.log(`currently ${user.name} having courses ${user.course}`);
    }
    removeCourse(user,courseName){
        user.course.pop(courseName);
        console.log(`currently ${user.name} having courses after deleting ${user.course}`);

    }
}
let jethalal=new User('jethalal',41,'j@tmkoc.com');
let babita=new User('Babita',29,'b@tmkoc.com');
let bhide=new Moderator('Bhide',40,'b@tmkoc.com');
let champak=new Admin('champak',55,'c@tmkoc.com');
jethalal.login();
jethalal.details(jethalal);
bhide.login();
bhide.addCoin(jethalal);
bhide.addCoin(jethalal);
bhide.removeCoin(jethalal);
bhide.details(jethalal);
champak.addCourse(jethalal,"java Essential");
champak.addCourse(jethalal,"block chain");
champak.removeCourse(jethalal,"block chain");
babita.logout();
bhide.logout();
champak.details(babita);
jethalal.logout();
champak.logout();

