import User from "../entities/User"

export default interface UserRepository{
    save(email: string, firstName: string, lastName: string, password: string): void
    findByEmail(email: string): Promise<User>
}