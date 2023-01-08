import User from "../../../core/entities/User";
import UserRepository from "../../../core/repositories/UserRepository";

export default class MockedUserRepository implements UserRepository{
    
    users = [{
        "email" : "joao@email.com",
        "firstName" : "joao",
        "lastName" : "silva",
        "password" : "senha123",
    }]

    save(email: string, firstName: string, lastName: string, password: string): void{
        this.users.push({
            "email" : email,
            "firstName" : firstName,
            "lastName" : lastName,
            "password" : password,
        })
    }

    findByEmail(email: string): Promise<User>{
        let user = this.users.find( user => user.email === email)
        if(user != null){
            return Promise.resolve(new User(user?.email, user?.firstName, user?.lastName, user?.password))
        }
        return Promise.reject("User not found")
    }
}