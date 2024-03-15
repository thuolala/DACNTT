import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CaKham } from './cakham.model';
import { MatDialog } from '@angular/material/dialog';
import { DatlichComponent } from 'app/datlich/datlich.component';

@Component({
  selector: 'app-shift-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './shift-list.component.html',
  styleUrl: './shift-list.component.css'
})
export class ShiftListComponent {
  searchTerm: string = '';
  selectedFilter: string = '';
  options: string[] = [];
  cakhamList: CaKham[] = []
  // cakham: CaKham = {
  //   id: 0,
  //   loaicakham: '',
  //   chuyenkhoa: '',
  //   idBacsi: 0,
  //   bacsi: 0
  // };
  
  constructor(private http: HttpClient, public dialog: MatDialog) { }
  
  fetchOptions() {
    this.http.get<string[]>('http://localhost:8080/api/loaicakham')
      .subscribe(options => {
        this.options = options; 
      });
  }

  fetchCakham() {
    this.http.get<CaKham[]>('http://localhost:8080/api/cakham')
      .subscribe(data => {
        this.cakhamList = data;
      });
  }

  openModal(): void {
    const dialogRef = this.dialog.open(DatlichComponent,
      {data: 'AA'}
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    this.fetchOptions(); 
    this.fetchCakham();
  }

  applyFilters() {
  }
}
