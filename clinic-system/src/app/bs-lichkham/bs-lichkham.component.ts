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
import { QrComponent } from 'app/qr/qr.component';
import { HomeComponent } from 'app/trangchu/trangchu.component';
// import { WebSocketAPI } from 'app/shared/WebSocketAPI ';

@Component({
  selector: 'app-bs-lickkham',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule, MatTableModule, MatSortModule, QrComponent],
  templateUrl: './bs-lichkham.component.html',
  styleUrl: './bs-lichkham.component.css'
})

export class BsLichkhamComponent implements OnInit{
  // khai bao 
  hsckList: HoSoCaKham[] = [];
  displayedColumns: string[] = ['id', 'ngaykham', 'loaicakham', 'bacsi', 'trangthai', 'chitiet'];
  dataSource = new MatTableDataSource(this.hsckList);
  dataRe: any;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
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

  // constructor 
  constructor(
              private _liveAnnouncer: LiveAnnouncer, 
              private http: HttpClient, 
              private route: ActivatedRoute, 
              public dialog: MatDialog) {}

  // chay khi khoi tao lan dau 
  private readonly readInterval = 5000; 
  private readTimer: any;

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
      this.dataRe = Number(params.get('dataSend'));
      this.getHSCKListByIdBS(this.dataRe);

       // bat dau doc file txt 
      // this.readTXT();

      // this.readTimer = setInterval(() => this.readTXT(), this.readInterval);
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.readTimer);
  }

  getHSCKListByIdBS(id: number) {
    const urlHSCK = 'http://localhost:8080/api/hoso-cakham/bacsi/' ;
    // this.http.get<HoSoCaKham[]>('http://localhost:8080/api/hoso-cakham/bacsi/' + id)
    this.http.get<HoSoCaKham[]>(`${urlHSCK}${id}`)
      .subscribe(data => { 
        this.hsckList = data;
        this.dataSource.data = this.hsckList;
      });
  }

  // by qr 
  hsck_qr: HoSoCaKham = {
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

  getHSCK(id: number) {
    const urlHSCK = 'http://localhost:8080/api/hoso-cakham/' ;
    let hscckham: HoSoCaKham = {
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
    // this.http.get<HoSoCaKham[]>('http://localhost:8080/api/hoso-cakham/bacsi/' + id)
    this.http.get<HoSoCaKham>(`${urlHSCK}${id}`)
      .subscribe(data => { 
        hscckham = data;
        const dialogRef = this.dialog.open(ChitietLichkhamComponentBS,
          {data: {hscckham}}
          );
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      });
  }

  // sort table 
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;

    this.readTXT();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openModal(hscckham : HoSoCaKham): void {
    this.hs = hscckham;
    const dialogRef = this.dialog.open(ChitietLichkhamComponentBS,
      {data: {hscckham}}
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // QR code scanner
  scanQRCode() {
    const dialogRef =  this.dialog.open(QrComponent, { disableClose: true});
    dialogRef.afterClosed().subscribe((submit) => {
    })
  }

  readTXT(){
    this.http.get('assets/input.txt', {responseType: 'text'}).subscribe(data => {
      // check if empty then not read 
      if(data !== "") {
        // read 1st line 
        const readId = data.split("\n")[0];
        this.getHSCK(Number(readId));
      }
  })
  }
}


