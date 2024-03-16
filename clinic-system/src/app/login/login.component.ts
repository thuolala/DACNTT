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
    thongbao: string = '';

    constructor(private authService: AuthenticationService, private router: Router, private emailService: EmailService) { }

    login() {
        this.authService.login(this.email, this.matkhau)
            .subscribe( 
                (response: string) => {
                    this.loginMessage = response;
                    if(response === "Benh nhan"){
                        this.emailService.setEmail(this.email);
                        this.router.navigate(["/nguoi-dung/ca-kham"]);
                    }
                    else if(response === "Admin"){
                        this.router.navigate(["/admin"]);
                    }
                    else if(response === "Bac si"){
                        this.router.navigate(["/bac-si"]);
                    }
                    else if(response === "Tai khoan khong ton tai"){
                        this.thongbao = "Tài khoản không tồn tại!"
                        alert("Tài khoản không tồn tại!");
                        // this.router.navigate(["/trang-chu/dang-nhap"]);
                    }
                    else{

                    }
                },
                (error) => {
                    // Handle error here
                }
            );
    }
}
