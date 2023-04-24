export class Login {
    username?: string;
    password?: string;

    constructor(login: Login) {
        this.username = login.username
        this.password = login.password
    }
}