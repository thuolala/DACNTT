import { Component } from '@angular/core';
import { AuthenticationService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    email: string = '';
    matkhau: string = '';
    loginMessage: string = '';

    constructor(private authService: AuthenticationService, private router: Router) { }

    login() {
        this.authService.login(this.email, this.matkhau)
            .subscribe(
                (response: string) => {
                    this.loginMessage = response;
                    if(response === "Login Success!"){
                      this.router.navigate(["/user"]);
                    }
                },
                (error) => {
                    // Handle error here
                }
            );
    }
}
