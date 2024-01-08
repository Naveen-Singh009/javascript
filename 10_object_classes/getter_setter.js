class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
// agar constructor or setter dono ek saath set karte hain to 
// maximum call stack size exceeded error aati hai
// solution of this is 
// we use _ befor variable in setter
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}hitesh`
    }
    set password(value){
        this._password = value
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(email){
        this._email = email
    }
}
// if we dont want to give access of any thing to the user 
// in this case we use getters and setters 

const hitesh = new User("hitesh@gmail.com", "123")
console.log(hitesh.password);
console.log(hitesh.email);
