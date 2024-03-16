import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CaKham } from './cakham.model';
import { MatDialog } from '@angular/material/dialog';
import { DatlichComponent } from 'app/datlich/datlich.component';
import { BenhNhanService } from 'app/shared/shared-benhnhan.service';
import { BenhNhan } from 'app/user/benhnhan.model';

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

  bn: BenhNhan = {
    id: 0,
    hoten: '',
    sdt: '',
    email: '',
    gioitinh: 0,
    namsinh: 0,
    diachi: ''
  };
  
  constructor(private http: HttpClient, public dialog: MatDialog, private benhNhanService: BenhNhanService) { }
  
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

  // fetchBenhnhan() {
  //   this.http.get<CaKham[]>('http://localhost:8080/api/benhnhan/{email}')
  //     .subscribe(data => {
  //       this.cakhamList = data;
  //     });
  // }

  openModal(cakham : CaKham): void {
    this.bn = this.benhNhanService.getBenhNhan()
    const benhnhan = this.bn;
    console.log(benhnhan);
    const dialogRef = this.dialog.open(DatlichComponent,
      {data: {cakham, benhnhan}}
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
