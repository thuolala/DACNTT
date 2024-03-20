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
import { ChitietBsComponent } from './chitiet-bs/chitiet-bs.component';
import { ThemBacsiComponent } from './them-bacsi/them-bacsi.component';

@Component({
  selector: 'app-qlbs',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule, MatTableModule, MatSortModule],
  templateUrl: './qlbs.component.html',
  styleUrl: './qlbs.component.css'
})
export class QlbsComponent implements OnInit{
  constructor(private _liveAnnouncer: LiveAnnouncer, private http: HttpClient, private route: ActivatedRoute, public dialog: MatDialog){
  }

  ngOnInit(): void {
    this.getBS();
  }

  // khai bao 
  bsList: BacSi[] = []; 
  bnList: BenhNhan[] = [];
  ckList: CaKham[] = [];
  hsckList: HoSoCaKham[] = []; 
  hsckList_ht: HoSoCaKham[] = []; 
  bsCount = 0;
  bnCount = 0;
  hsckCount = 0;

  // bac si 
  getBS() {
    this.http.get<BacSi[]>('http://localhost:8080/api/bacsi')
      .subscribe(data => {
        this.bsList = data; 
        this.bsCount = this.bsList.length;
        this.dataSource.data = this.bsList;
      });
  }

  // table 
  displayedColumns: string[] = ['id', 'hoten', 'sdt', 'email', 'chuyenkhoa', 'matkhau', 'chitiet'];
  dataSource = new MatTableDataSource(this.bsList);

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  // modal 
  bs: BacSi = {
    id: 0,
    hoten: '',
    sdt: '',
    email: '',
    chuyenkhoa: '',
    matkhau: ''
  };

  openModal(bacsi : BacSi): void {
    this.bs = bacsi;
    const dialogRef = this.dialog.open(ChitietBsComponent,
      {data: {bacsi}}
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  them(): void{
    const dialogRef = this.dialog.open(ThemBacsiComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
