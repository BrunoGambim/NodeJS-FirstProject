import User from "../../../core/entities/User"



test("User must have a email", function(){
    expect(() => {new User("","firstname","lastname","password")}).toThrowError("User must have a email")
})

test("User must have a first name", function(){
    expect(() => {new User("email","","lastname","password")}).toThrowError("User must have a first name")
})

test("User must have a last name", function(){
    expect(() => {new User("email","firstname","","password")}).toThrowError("User must have a last name")
})

test("User must have a password", function(){
    expect(() => {new User("email","firstname","lastname","")}).toThrowError("User must have a password")
})