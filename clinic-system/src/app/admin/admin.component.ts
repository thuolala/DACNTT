import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ShiftListComponent } from 'app/ds-lichkham/ds-lichkham.component';
import { EmailService } from 'app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ShiftListComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  // khai bao 
  email: string = '';

  // con
  constructor(private emailService: EmailService, 
              private router: Router){
  }

  ngOnInit(): void {
    this.email = this.emailService.getEmail();
    // check if login 
    // NHO UNCOMMENT DOAN NAY 
    // if(this.email === ""){
    //   this.router.navigate([""]);
    // }
  }


}
