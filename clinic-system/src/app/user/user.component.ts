import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EmailService } from 'app/shared/shared.service';
import { UserService } from './user.service';
import { BenhNhan } from './benhnhan.model';
import { ShiftListComponent } from 'app/shift-list/shift-list.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ShiftListComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  email: string = '';
  benhnhan: BenhNhan = {
    id: 0,
    hoten: '',
    sdt: '',
    email: '',
    gioitinh: 0,
    namsinh: 0,
    diachi: ''
  };
  
  constructor(private emailService: EmailService, private userService: UserService) {}

  ngOnInit() {
    this.email = this.emailService.getEmail();
    this.getBenhNhan(this.email);
  }

  getBenhNhan(email: string): void {
    this.userService.getBenhNhan(email)
      .subscribe(
        (data: BenhNhan) => {
          this.benhnhan = data;
          console.log('BenhNhan:', this.benhnhan);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
}
