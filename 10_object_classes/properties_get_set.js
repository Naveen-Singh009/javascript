// old style of setting getters and setters
// function based syntax 
function User(email, password){
    this._email = email
    this._password = password


    //function is object also 
    // we can call the objects power
    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set : function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password.toUpperCase()
        },
        set : function(value){
            this._password = value
        }
    })
}

const chai = new User("chai@chai.com", "chai")
console.log(chai.email);