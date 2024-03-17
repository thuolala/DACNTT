import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EmailService } from 'app/shared/shared.service';
import { UserService } from './benhnhan.service';
import { BenhNhan } from './benhnhan.model';
import { ShiftListComponent } from 'app/ds-lichkham/ds-lichkham.component';
import { BenhNhanService } from 'app/shared/shared-benhnhan.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ShiftListComponent],
  templateUrl: './benhnhan.component.html',
  styleUrl: './benhnhan.component.css'
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
  
  constructor(private emailService: EmailService, private userService: UserService, private benhNhanService: BenhNhanService) {}

  ngOnInit() {
    this.email = this.emailService.getEmail();
    this.getBenhNhan(this.email);
  }

  getBenhNhan(email: string): void {
    this.userService.getBenhNhan(email)
      .subscribe(
        (data: BenhNhan) => {
          this.benhnhan = data;
          this.benhNhanService.setBenhNhan(data);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
}
