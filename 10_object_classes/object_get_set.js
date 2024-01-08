//object based syntax for getters and setters
const User = {
    _email: 'n@hc.com', // _ is like we are defining property as private
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}
// factory fuction 
// by default null
const tea = Object.create(User)
console.log(tea.email);
 