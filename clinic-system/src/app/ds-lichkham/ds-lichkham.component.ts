import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CaKham } from './lichkham.model';
import { MatDialog } from '@angular/material/dialog';
import { DatlichComponent } from 'app/datlich/datlich.component';
import { BenhNhanService } from 'app/shared/shared-benhnhan.service';
import { BenhNhan } from 'app/benhnhan/benhnhan.model';
import { BacSi } from 'app/bacsi/bacsi.model';
import { BacSiService } from 'app/bacsi/bacsi.service';

@Component({
  selector: 'app-shift-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './ds-lichkham.component.html',
  styleUrl: './ds-lichkham.component.css'
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

  bs: BacSi = {
    id: 0,
    hoten: '',
    sdt: '',
    email: '',
    matkhau: ''
  };
  
  constructor(private http: HttpClient, public dialog: MatDialog, private benhNhanService: BenhNhanService, private bsService: BacSiService) { }
  
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
    // this.bs = this.bsService.getBacSi(cakham.idBacsi);
    const benhnhan = this.bn;
    // const bacsi = this.bs; 

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
