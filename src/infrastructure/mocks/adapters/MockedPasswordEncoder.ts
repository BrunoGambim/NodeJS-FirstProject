import PasswordEncoder from "../../../core/utils/PasswordEncoder";

export default class MockedPasswordEncoder implements PasswordEncoder{
    constructor(){

    }

    encode(password: string): string{
        return password.toLowerCase().replace("a","b").replace("f","x").concat("ABC")
    }
}