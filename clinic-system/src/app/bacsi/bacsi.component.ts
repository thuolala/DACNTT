import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ShiftListComponent } from 'app/ds-lichkham/ds-lichkham.component';
import { BacSiService } from './bacsi.service';
import { EmailService } from 'app/shared/shared.service';
import { BacSi } from './bacsi.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ShiftListComponent],
  templateUrl: './bacsi.component.html',
  styleUrl: './bacsi.component.css'
})
export class DoctorComponent implements OnInit{
  email: string = ''; 
  bacsi: BacSi = {
    id: 0,
    hoten: '',
    sdt: '',
    email: '',
    matkhau: ''
  };
  public dataSend!: number; 

  constructor(private router: Router, private bsService: BacSiService, private emailService: EmailService){}

  ngOnInit() {
    this.email = this.emailService.getEmail();
    // check if login 
    if(this.email === ""){
      this.router.navigate([""]);
    }
    this.getBacSi(this.email);
  }

  getBacSi(email: string): void {
    this.bsService.getBacSiByEmail(email)
      .subscribe(
        (data: BacSi) => {
          this.bacsi = data;
          this.dataSend = data.id;
          this.bsService.setBacSi(data);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
}
