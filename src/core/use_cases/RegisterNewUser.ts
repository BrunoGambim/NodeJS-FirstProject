import PasswordEncoder from "../utils/PasswordEncoder";
import User from "../entities/User";
import UserRepository from "../repositories/UserRepository";


export default class RegisterNewUser{
    passwordEncoder: PasswordEncoder
    userRepository: UserRepository

    constructor(passwordEncoder: PasswordEncoder, userRepository: UserRepository){
        this.passwordEncoder = passwordEncoder
        this.userRepository = userRepository
    }

    async execute(email: string, firstName: string, lastName: string, password: string) {
        await this.userRepository.findByEmail(email).then(user => {
            throw new Error("Email already registered")
        }, reason => {
            let encodedPassword = this.passwordEncoder.encode(password) 
            let user = new User(email, firstName, lastName, encodedPassword)
            this.userRepository.save(user.email, user.firstName, user.lastName, user.password)
        })
    }
}