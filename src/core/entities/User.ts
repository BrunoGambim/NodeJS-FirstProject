export default class User {
    email: string = ""
    firstName: string = ""
    lastName: string = ""
    password: string = ""

    constructor(email: string,firstName: string, lastName: string, password: string) {
        this.setEmail(email)
        this.setFirstName(firstName)
        this.setLastName(lastName)
        this.setPassword(password)
    }

    setEmail(email: string): void{
        if(email == undefined || email == null || email == "") throw new Error("User must have a email")
        this.email = email
    }

    setFirstName(firstName: string): void{
        if(firstName == undefined || firstName == null || firstName == "") throw new Error("User must have a first name")
        this.firstName = firstName
    }

    setLastName(lastName: string): void{
        if(lastName == undefined || lastName == null || lastName == "") throw new Error("User must have a last name")
        this.lastName = lastName
    }

    setPassword(password: string): void{
        if(password == undefined || password == null || password == "") throw new Error("User must have a password")
        this.password = password
    }
}