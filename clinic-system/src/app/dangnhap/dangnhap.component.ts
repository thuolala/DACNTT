import { Component } from '@angular/core';
import { AuthenticationService } from './dangnhap.service';
import { Router } from '@angular/router';
import { EmailService } from 'app/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
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
                        this.router.navigate(["/nguoi-dung/ds-lich-kham"]);
                    }
                    else if(response === "Admin"){
                        // this.emailService.setEmail(this.email);
                        this.router.navigate(["/admin/tong-quan"]);
                    }
                    else if(response === "Bac si"){
                        this.emailService.setEmail(this.email);
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
