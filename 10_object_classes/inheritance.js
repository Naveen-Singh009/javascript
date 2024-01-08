class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

// using extends keyword we can inherit
class Teacher extends User {
    constructor(username, email, password){
        super(username) // calling the upper class's constructor
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`Anew course is added by ${this.username}`);
    }
}

const chai = new Teacher("Naveen", "naveen@gmail.coom","1212")
chai.addCourse()
chai.logMe()
const masalaChai = new User("masalachai")
// masalaChai.addCourse()// it will not have the access of addcourse
masalaChai.logMe()

console.log(chai instanceof Teacher);
console.log(chai instanceof User);
