import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ShiftListComponent } from 'app/ds-lichkham/ds-lichkham.component';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ShiftListComponent],
  templateUrl: './bacsi.component.html',
  styleUrl: './bacsi.component.css'
})
export class DoctorComponent {

}
