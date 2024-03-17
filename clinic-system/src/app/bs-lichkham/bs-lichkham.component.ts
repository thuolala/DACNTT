import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { HoSoCaKham } from 'app/datlich/hoso-cakham.model';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ChitietLichkhamComponentBS } from './chitiet-lichkham-bs/chitiet-lichkham-bs.component';

@Component({
  selector: 'app-bs-lickkham',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule, MatTableModule, MatSortModule, ChitietLichkhamComponentBS],
  templateUrl: './bs-lichkham.component.html',
  styleUrl: './bs-lichkham.component.css'
})

export class BsLichkhamComponent implements OnInit{
  hsckList: HoSoCaKham[] = [];
  displayedColumns: string[] = ['id', 'ngaykham', 'loaicakham', 'bacsi', 'trangthai', 'chitiet'];
  dataSource = new MatTableDataSource(this.hsckList);
  constructor(private _liveAnnouncer: LiveAnnouncer, private http: HttpClient, private route: ActivatedRoute, public dialog: MatDialog) {}

  dataRe: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.dataRe = Number(params.get('dataSend'));
      this.fetchHSCK(this.dataRe);
    });
  }

  fetchHSCK(id: number) {
    this.http.get<HoSoCaKham[]>('http://localhost:8080/api/hoso-cakham/benhnhan/' + id)
      .subscribe(data => { 
        this.hsckList = data;
        this.dataSource.data = this.hsckList;
      });
  }

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  hs: HoSoCaKham = {
    id: 0,
    loaicakham: '',
    bacsi: '',
    idBacsi: 0,
    idCakham: 0,
    idBenhnhan: 0,
    benhnhan: '',
    sdt: '',
    email: '',
    namsinh: 0,
    lichsuBenhly: '',
    chuandoan: '',
    dieutri: '',
    ngaykham: '',
    giokham: '',
    trangthai: 0
  };

  openModal(hscckham : HoSoCaKham): void {
    this.hs = hscckham;
    const dialogRef = this.dialog.open(ChitietLichkhamComponentBS,
      {data: {hscckham}}
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
