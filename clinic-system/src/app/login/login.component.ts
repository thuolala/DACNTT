import { Component } from '@angular/core';
import { AuthenticationService } from './login.service';
import { Router } from '@angular/router';
import { EmailService } from 'app/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    email: string = '';
    matkhau: string = '';
    loginMessage: string = '';

    constructor(private authService: AuthenticationService, private router: Router, private emailService: EmailService) { }

    login() {
        this.authService.login(this.email, this.matkhau)
            .subscribe(
                (response: string) => {
                    this.loginMessage = response;
                    if(response === "Login Success!"){
                        this.emailService.setEmail(this.email);
                        this.router.navigate(["/nguoi-dung/ca-kham"]);
                    }
                    else{
                        this.router.navigate(["/trang-chu/dang-nhap"]);
                    }
                },
                (error) => {
                    // Handle error here
                }
            );
    }
}
