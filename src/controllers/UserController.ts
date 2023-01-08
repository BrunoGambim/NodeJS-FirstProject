import RegisterNewUser from "../core/use_cases/RegisterNewUser";
import MockedPasswordEncoder from "../infrastructure/mocks/utils/MockedPasswordEncoder";
import MockedUserRepository from "../infrastructure/mocks/repositories/MockedUserRepository";

export default class UserController{
    constructor(){
    }

    static async registerNewUser(params:any, body: any){
        let useCase = new RegisterNewUser(new MockedPasswordEncoder, new MockedUserRepository)
        await useCase.execute(body.email, body.firstName, body.lastName, body.password)
    }
}