import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BacSi } from 'app/bacsi/bacsi.model';
import { BenhNhan } from 'app/benhnhan/benhnhan.model';
import { HoSoCaKham } from 'app/datlich/hoso-cakham.model';
import { CaKham } from 'app/ds-lichkham/lichkham.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { LKService } from './lichkham.service';

@Component({
  selector: 'app-them-lk',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule, FormsModule],
  templateUrl: './them-lk.component.html',
  styleUrl: './them-lk.component.css'
})

export class ThemLKComponent implements OnInit{
  successMessage: string = '';
  selectedFilter: string = '';
  selectedId: number = 0;
  lckList: string[] = [];
  idbsList: number[] = [];
  bs_hoten = '';
  bs: BacSi = {
    id: 0,
    hoten: '',
    sdt: '',
    email: '',
    chuyenkhoa: '',
    matkhau: ''
  };

  @ViewChild('lckInpput') lckInpput!: ElementRef;
  @ViewChild('ckInpput') ckInpput!: ElementRef;
  @ViewChild('idbsInpput') idbsInpput!: ElementRef;
  @ViewChild('bacsiInput') bacsiInput!: ElementRef;
  @ViewChild('chiphiInput') chiphiInput!: ElementRef;

  constructor(private lkService: LKService, public dialogRef: MatDialogRef<ThemLKComponent>, private _liveAnnouncer: LiveAnnouncer, private http: HttpClient, private route: ActivatedRoute, public dialog: MatDialog){
  }

  ngOnInit(): void {
    this.getLCK(); 
    this.getIDBS();
  }

  getLCK() {
    this.http.get<string[]>('http://localhost:8080/api/loaicakham')
      .subscribe(options => {
        this.lckList = options; 
      });
  }

  getIDBS() {
    this.http.get<number[]>('http://localhost:8080/api/idbs')
      .subscribe(options => {
        this.idbsList = options; 
      });
  }

  getBSHoten(id: number){
    this.http.get<BacSi>('http://localhost:8080/api/bacsi/id/' + id)
    .subscribe(data => {
      this.bs = data;
      this.bs_hoten = this.bs.hoten;
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }  

  // 
  lck: string = '';
  ckhoa: string = ''; 
  idBS: number = 1; 
  bsi: string = ''; 
  cphi: string = '';
  cakham: CaKham = {
    id: 0,
    loaicakham: '',
    chuyenkhoa: '',
    idBacsi: 0,
    bacsi: '',
    chiphi: ''
  };

  send(){
    this.lck = this.lckInpput.nativeElement.value; 
    this.ckhoa = this.ckInpput.nativeElement.value; 
    this.idBS = this.idbsInpput.nativeElement.value; 
    this.bsi = this.bacsiInput.nativeElement.value; 
    this.cphi = this.chiphiInput.nativeElement.value; 

    // send post req 
    this.cakham.loaicakham = this.lck; 
    this.cakham.chuyenkhoa = this.ckhoa; 
    this.cakham.idBacsi = this.idBS; 
    this.cakham.bacsi = this.bsi; 
    this.cakham.chiphi = this.cphi; 

    // send post req 
    this.lkService.them(this.cakham)
    .subscribe(
      (response: CaKham) => {
        if ( response != null) {
          this.successMessage = "Thêm thành công!"; 

          this.ngOnInit();
        }
      },
      (error) => {
      }
    );

  }
}
