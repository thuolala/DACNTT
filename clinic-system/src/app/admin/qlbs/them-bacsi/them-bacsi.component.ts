import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { QRCodeModule } from 'angularx-qrcode';
import { BacSi } from 'app/bacsi/bacsi.model';
import {NgxPrintModule} from 'ngx-print';
import { CTBSService } from '../chitiet-bs/chitiet-bs.service';

@Component({
  selector: 'app-them-bacsi',
  standalone: true,
  imports: [FormsModule, CommonModule, QRCodeModule, NgxPrintModule],
  templateUrl: './them-bacsi.component.html',
  styleUrl: './them-bacsi.component.css'
})
export class ThemBacsiComponent implements OnInit{
  // khai bao 
  successMessage: string = '';
  @ViewChild('hotenInput') hotenInput!: ElementRef;
  @ViewChild('sdtInput') sdtInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('chuyenkhoaInput') chuyenkhoaInput!: ElementRef;
  @ViewChild('matkhauInput') matkhauInput!: ElementRef;

  constructor(private ctbsService: CTBSService, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, public dialogRef: MatDialogRef<ThemBacsiComponent>){}

  ngOnInit(): void {

  }

  // them
  hoten: string = ''; 
  sdt: string = ''; 
  email: string = ''; 
  chuyenkhoa: string = '';
  matkhau: string = '';
  bs: BacSi = {
    id: 0,
    hoten: '',
    sdt: '',
    email: '',
    chuyenkhoa: '',
    matkhau: ''
  }

  send(){
    this.hoten = this.hotenInput.nativeElement.value; 
    this.sdt = this.sdtInput.nativeElement.value;
    this.email = this.emailInput.nativeElement.value; 
    this.chuyenkhoa = this.chuyenkhoaInput.nativeElement.value;
    this.matkhau = this.matkhauInput.nativeElement.value;

    this.bs.hoten = this.hoten; 
    this.bs.sdt = this.sdt; 
    this.bs.email = this.email;
    this.bs.chuyenkhoa = this.chuyenkhoa;
    this.bs.matkhau = this.matkhau; 

    // send post req 
    this.ctbsService.them(this.bs)
    .subscribe(
      (response: BacSi) => {
        if ( response != null) {
          this.successMessage = "Thêm thành công!"; 
        }
      },
      (error) => {
      }
    );
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
