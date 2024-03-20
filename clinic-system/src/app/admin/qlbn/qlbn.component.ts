import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { BacSi } from 'app/bacsi/bacsi.model';
import { BenhNhan } from 'app/benhnhan/benhnhan.model';
import { HoSoCaKham } from 'app/datlich/hoso-cakham.model';
import { CaKham } from 'app/ds-lichkham/lichkham.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ChitietBnComponent } from './chitiet-bn/chitiet-bn.component';
import { Taikhoan } from 'app/shared/taikhoan.model';
import { TaikhoanService } from 'app/shared/taikhoan.service'; 

@Component({
  selector: 'app-qlbn',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule, MatTableModule, MatSortModule],
  templateUrl: './qlbn.component.html',
  styleUrl: './qlbn.component.css'
})
export class QlbnComponent implements OnInit{
  constructor(private tkService: TaikhoanService, private _liveAnnouncer: LiveAnnouncer, private http: HttpClient, private route: ActivatedRoute, public dialog: MatDialog){
  }

  ngOnInit(): void {
    this.getBS();
  }

  // khai bao 
  bnList: BenhNhan[] = [];

  // bac si 
  getBS() {
    this.http.get<BenhNhan[]>('http://localhost:8080/api/benhnhan')
      .subscribe(data => {
        this.bnList = data; 
        this.dataSource.data = this.bnList;
      });
  }

  // table 
  displayedColumns: string[] = ['id', 'hoten', 'sdt', 'email', 'gioitinh', 'namsinh', 'diachi', 'chitiet'];
  dataSource = new MatTableDataSource(this.bnList);

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  // modal 
  bn: BenhNhan = {
    id: 0,
    hoten: '',
    sdt: '',
    email: '',
    gioitinh: 0,
    namsinh: 0,
    diachi: ''
  };

  taikhoan: Taikhoan = {
    id: 0,
    email: '',
    matkhau: '',
    quyen: 0
  };

  openModal(benhnhan : BenhNhan): void {
    this.bn = benhnhan;
    const dialogRef = this.dialog.open(ChitietBnComponent,
      {data: {benhnhan}}
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
