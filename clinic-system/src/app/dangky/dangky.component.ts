import { Component } from '@angular/core';
import { LogupService } from './dangky.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-logup',
  // standalone: true,
  // imports: [],
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class LogupComponent {
  hoten: string = '';
  sdt: string = '';
  email: string = '';
  nam = true; 
  nu = false;
  namsinh = 2002;
  diachi : string = '';
  matkhau: string = '';
  gioitinh = 0;

  constructor(private logupService: LogupService, private router: Router) { }

  onGenderChange(isNam: boolean) {
    if (isNam) {
      this.nu = false;
      this.gioitinh = 0; 
    } else {
      this.nam = false;
      this.gioitinh = 1;
    }
  }
  
  logup() {
    this.logupService.logup(this.hoten, this.sdt, this.email, this.gioitinh, this.namsinh, this.diachi, this.matkhau)
      .subscribe(
        (response: string) => {
          if ( response === "Logup Success!") {
            this.router.navigate(['/dang-nhap']);
          }
        },
        (error) => {
        }
      );
  }
}
