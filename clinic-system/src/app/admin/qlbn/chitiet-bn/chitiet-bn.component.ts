import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { QRCodeModule } from 'angularx-qrcode';
import { BacSi } from 'app/bacsi/bacsi.model';
import {NgxPrintModule} from 'ngx-print';
import { CTBNService } from './chitiet-bn.serivce';
import { BenhNhan } from 'app/benhnhan/benhnhan.model';
import { Taikhoan } from 'app/shared/taikhoan.model';
import { TaikhoanService } from 'app/shared/taikhoan.service';

@Component({
  selector: 'app-chitiet-bn',
  standalone: true,
  imports: [FormsModule, CommonModule, QRCodeModule, NgxPrintModule],
  templateUrl: './chitiet-bn.component.html',
  styleUrl: './chitiet-bn.component.css'
})
export class ChitietBnComponent implements OnInit{
   // khai bao 
   successMessage: string = '';
   @ViewChild('hotenInput') hotenInput!: ElementRef;
   @ViewChild('sdtInput') sdtInput!: ElementRef;
   @ViewChild('emailInput') emailInput!: ElementRef;
   @ViewChild('gioitinhInput') gioitinhInput!: ElementRef;
   @ViewChild('namsinhInput') namsinhInput!: ElementRef;
   @ViewChild('diachiInput') diachiInput!: ElementRef;
   @ViewChild('matkhauInput') matkhauInput!: ElementRef;
 
   constructor(private tkService: TaikhoanService, private ctbnService: CTBNService, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, public dialogRef: MatDialogRef<ChitietBnComponent>){}
 
   ngOnInit(): void {
 
   }
 
   // cap nhat 
   sdt: string = ''; 
   namsinh = 2002;
   diachi: string = '';
   matkhau: string = '';
   bn: BenhNhan = {
     id: 0,
     hoten: '',
     sdt: '',
     email: '',
     gioitinh: 0,
     namsinh: 0,
     diachi: ''
   };
   tk: Taikhoan = {
     id: 0,
     email: '',
     matkhau: '',
     quyen: 0
   };
 
   send(){
     this.sdt = this.sdtInput.nativeElement.value;
     this.namsinh = this.namsinhInput.nativeElement.value;
     this.diachi = this.diachiInput.nativeElement.value;
     this.matkhau = this.matkhauInput.nativeElement.value;
 
     this.bn = this.data.bacsi; 
     this.tk = this.data.taikhoan;
     this.bn.sdt = this.sdt; 
     this.bn.namsinh = this.namsinh; 
     this.bn.diachi = this.diachi; 
     this.tk.matkhau = this.matkhau; 
 
     // send put req benh nhan 
     this.ctbnService.capnhat(this.bn)
     .subscribe(
       (response: BenhNhan) => {
         if ( response != null) {
           this.successMessage = "Cập nhật thành công!"; 
         }
       },
       (error) => {
       }
     );

      // send put req tai khoan 
    //  this.tkService.capnhat(this.tk)
    //  .subscribe(
    //    (response: Taikhoan) => {
    //      if ( response != null) {
    //        this.successMessage = "Cập nhật thành công!"; 
    //      }
    //    },
    //    (error) => {
    //    }
    //  );
   }
 
   onClose(): void {
     this.dialogRef.close();
   }
}
