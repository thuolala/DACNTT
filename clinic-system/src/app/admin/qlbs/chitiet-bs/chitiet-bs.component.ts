import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { QRCodeModule } from 'angularx-qrcode';
import { BacSi } from 'app/bacsi/bacsi.model';
import {NgxPrintModule} from 'ngx-print';
import { CTBSService } from './chitiet-bs.service';

@Component({
  selector: 'app-chitiet-bs',
  standalone: true,
  imports: [FormsModule, CommonModule, QRCodeModule, NgxPrintModule],
  templateUrl: './chitiet-bs.component.html',
  styleUrl: './chitiet-bs.component.css'
})
export class ChitietBsComponent implements OnInit{
  // khai bao 
  successMessage: string = '';
  @ViewChild('hotenInput') hotenInput!: ElementRef;
  @ViewChild('sdtInput') sdtInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('chuyenkhoaInput') chuyenkhoaInput!: ElementRef;
  @ViewChild('matkhauInput') matkhauInput!: ElementRef;

  constructor(private ctbsService: CTBSService, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, public dialogRef: MatDialogRef<ChitietBsComponent>){}

  ngOnInit(): void {

  }

  // cap nhat 
  sdt: string = ''; 
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
    this.sdt = this.sdtInput.nativeElement.value;
    this.matkhau = this.matkhauInput.nativeElement.value;

    this.bs = this.data.bacsi; 
    this.bs.sdt = this.sdt; 
    this.bs.matkhau = this.matkhau; 

    // send put req 
    this.ctbsService.capnhat(this.bs)
    .subscribe(
      (response: BacSi) => {
        if ( response != null) {
          this.successMessage = "Cập nhật thành công!"; 
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
