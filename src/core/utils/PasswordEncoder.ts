export default interface PasswordEncoder {
    encode(password: string): string
}