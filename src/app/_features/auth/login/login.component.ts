import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Login } from '../../_api/auth/auth';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    private today = new Date()
    private curHr = this.today.getHours()
    public $label_submit = 'Masuk'

    valCheck: string[] = ['remember'];
    password!: string;

    login: Login = new Login({});

    constructor(public layoutService: LayoutService) { }

    get greetings() {
        if (this.curHr < 12) {
            return 'Selamat Pagi'
        } else if (this.curHr < 16) {
            return 'Selamat Siang'
        } else if (this.curHr < 18) {
            return 'Selamat Sore'
        } else if (this.curHr < 23) {
            return 'Selamat Malam'
        } else {
            return 'Selamat Pagi'
        }
    }

    submit() {
        console.log('login', this.login);
        this.$label_submit = 'Loading...'
        setTimeout(() => this.$label_submit = 'Masuk', 3000)
    }

    get validation() {
        return (this.login.username == '' || this.login.username == undefined) || (this.login.password == '' || this.login.password == undefined)
    }
}
