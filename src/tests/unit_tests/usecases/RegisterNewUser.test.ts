import RegisterNewUser from "../../../core/use_cases/RegisterNewUser"
import MockedPasswordEncoder from "../../../infrastructure/mocks/adapters/MockedPasswordEncoder"
import MockedUserRepository from "../../../infrastructure/mocks/repositories/MockedUserRepository"

let userRepo: MockedUserRepository|null = null
let passEncoder: MockedPasswordEncoder|null = null
let useCase: RegisterNewUser|null = null

beforeEach(() => {
    userRepo = new MockedUserRepository()
    passEncoder = new MockedPasswordEncoder()
    useCase = new RegisterNewUser(passEncoder, userRepo)
});

test("Should be able to register a new user", async function(){
    expect(userRepo?.findByEmail("bruno@email.com")).rejects.toMatch("User not found")
    await useCase?.execute("bruno@email.com","Bruno", "Gambim","senha123")
    userRepo?.findByEmail("bruno@email.com").then(user => {
        expect(user.email).toMatch("bruno@email.com")
        expect(user.firstName).toMatch("Bruno")
        expect(user.lastName).toMatch("Gambim")
        expect(user.password).toMatch(passEncoder?.encode("senha123") ? passEncoder?.encode("senha123") : "" )
    })
})

test("User email must be unique", async function(){
    expect(useCase?.execute("joao@email.com","Bruno", "Gambim","senha123")).rejects.toThrowError("Email already registered")
})