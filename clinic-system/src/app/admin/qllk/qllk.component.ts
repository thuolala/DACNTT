import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { BenhNhanService } from 'app/shared/shared-benhnhan.service';
import { BacSiService } from 'app/bacsi/bacsi.service';
import { CaKham } from 'app/ds-lichkham/lichkham.model';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BenhNhan } from 'app/benhnhan/benhnhan.model';
import { BacSi } from 'app/bacsi/bacsi.model';
import { ThemLKComponent } from './them-lk/them-lk.component';

@Component({
  selector: 'app-qllk',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './qllk.component.html',
  styleUrl: './qllk.component.css'
})
export class QllkComponent {
  searchTerm: string = '';
  selectedFilter: string = '';
  options: string[] = [];
  cakhamList: CaKham[] = [];
  filteredCakhamList: CaKham[] = [];

  constructor(private http: HttpClient, public dialog: MatDialog, private benhNhanService: BenhNhanService, private bsService: BacSiService) { }
  
  getOptions() {
    this.http.get<string[]>('http://localhost:8080/api/loaicakham')
      .subscribe(options => {
        this.options = options; 
      });
  }

  getCakham() {
    this.http.get<CaKham[]>('http://localhost:8080/api/cakham')
      .subscribe(data => {
        this.cakhamList = data;
        this.filteredCakhamList = [...data]; 
      });
  }

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
    matkhau: '',
    chuyenkhoa: ''
  };

  ngOnInit(): void {
    this.getOptions(); 
    this.getCakham();
  }

  applyFilters() {
    if (!this.selectedFilter) {
      this.filteredCakhamList = [...this.cakhamList]; 
    } else {
      this.filteredCakhamList = this.cakhamList.filter(cakham => cakham.loaicakham === this.selectedFilter);
    }
  }

  xoa(cakham: CaKham) {
    const idck = cakham.id;
    this.http.delete<CaKham>(`http://localhost:8080/api/cakham/xoa/${idck}`)
      .subscribe(() => 'Delete successful');

      this.ngOnInit();
  }

  them(): void{
    const dialogRef = this.dialog.open(ThemLKComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
