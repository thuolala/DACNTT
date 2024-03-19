import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { QRCodeModule } from 'angularx-qrcode';
import { HoSoCaKham } from 'app/datlich/hoso-cakham.model';
import { CaKham } from 'app/ds-lichkham/lichkham.model';
import { CTLKServiceBS } from './chitiet-lichkham-bs.service';
import {NgxPrintModule} from 'ngx-print';

@Component({
  selector: 'app-chitiet-lichkham',
  standalone: true,
  imports: [FormsModule, CommonModule, QRCodeModule, NgxPrintModule],
  templateUrl: './chitiet-lichkham-bs.component.html',
  styleUrl: './chitiet-lichkham-bs.component.css'
})
export class ChitietLichkhamComponentBS implements OnInit{
  successMessage: string = '';
  @ViewChild('lckInput') lckInput!: ElementRef;
  @ViewChild('bacsiInput') bacsiInput!: ElementRef;
  @ViewChild('benhnhanInput') benhnhanInput!: ElementRef;
  @ViewChild('sdtInput') sdtInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('namsinhInput') namsinhInput!: ElementRef;
  @ViewChild('lsbenhlyInput') lsbenhlyInput!: ElementRef;
  @ViewChild('ngaykhamInput') ngaykhamInput!: ElementRef;
  @ViewChild('giokhamInput') giokhamInput!: ElementRef;
  @ViewChild('chuandoanInput') chuandoanInput!: ElementRef;
  @ViewChild('dieutriInput') dieutriInput!: ElementRef;
  @ViewChild('chiphiInput') chiphiInput!: ElementRef;

  
  loaicakham: string = '';
  bacsi: string = ''; 
  id_bacsi = 0;
  id_cakham = 0; 
  id_benhnhan = 0;
  benhnhan: string = ''; 
  sdt: string = ''; 
  email: string = ''; 
  namsinh = 0; 
  lsbenhly: string = ''; 
  chuandoan: string = ''; 
  dieutri: string = ''; 
  ngaykham: string = ''; 
  giokham: string = ''; 
  trangthai = 0;

  hsck: HoSoCaKham = {
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
    trangthai: 0,
  };

  cakham: CaKham = {
    id: 0,
    loaicakham: '',
    chuyenkhoa: '',
    idBacsi: 0,
    bacsi: 0,
    chiphi: ''
  }; 

  public cphi: string = '';
  id_hsck: number = 0;

  constructor(public ctlkService: CTLKServiceBS, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, public dialogRef: MatDialogRef<ChitietLichkhamComponentBS>){}

  ngOnInit(): void {
      this.getCakhamById();
      this.checkTrangthai();
  }

    // disable hoan tat button neu trang thai = 1 
    setTrangthai: boolean = false; 
    messageStatus: string = '';
    @ViewChild('ifTrangthai') ifTrangthai!: ElementRef;
    @ViewChild('tthaiInput') tthaiInput!: ElementRef;

    checkTrangthai(){
      if(this.data.hscckham.trangthai == 1){
        this.setTrangthai = true;
        this.messageStatus = 'Đã hoàn tất'
      }
      else{
        this.messageStatus = 'Chưa khám'
      }
    }

  getCakhamById() {
    const idck = this.data.hscckham.idCakham;
    const urlCK = 'http://localhost:8080/api/cakham/id/' ;
    this.http.get<CaKham>(`${urlCK}${idck}`)
      .subscribe(data => { 
        this.cakham = data;
      });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const formattedDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
    return formattedDate;
  }

  formatTime(timeString: string): string {
    const timeParts = timeString.split(':');
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);

    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);

    const formattedTime = `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;
    return formattedTime;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  send() {
      //set as HoSo_CaKham object 
      // this.loaicakham = this.data.hscckham.loaicakham;
      // this.bacsi = this.data.hscckham.bacSi;
      // this.id_bacsi = this.data.hscckham.idBacsi;
      // this.id_cakham = this.data.hscckham.idCakham; 
      // this.id_benhnhan = this.data.hscckham.idBenhnhan; 
      this.benhnhan = this.benhnhanInput.nativeElement.value;
      this.sdt = this.sdtInput.nativeElement.value;
      // this.email = this.data.hscckham.email;
      this.namsinh = this.namsinhInput.nativeElement.value;
      this.lsbenhly = this.lsbenhlyInput.nativeElement.value.toString();
      // this.ngaykham = this.data.hscckham.ngaykham;
      // this.giokham = this.data.hscckham.giokham;
      // this.chuandoan = this.data.hscckham.chuandoan;
      // this.dieutri = this.data.hscckham.dieutri;
      // this.trangthai = 0;

      // this.hsck = {id: 0, loaicakham: this.loaicakham, bacsi: this.bacsi, idBacsi: this.id_bacsi, idCakham : this.id_cakham, 
      //   idBenhnhan: this.id_benhnhan, benhnhan: this.benhnhan, sdt: this.sdt, 
      //   email: this.email, namsinh: Number(this.namsinh), lichsuBenhly: this.lsbenhly, 
      //   ngaykham: this.ngaykham.toString(), giokham: this.giokham.toString(), chuandoan: this.chuandoan, 
      //   dieutri: this.dieutri, trangthai: this.trangthai};

      this.hsck = this.data.hscckham;
      // this.hsck.benhnhan = this.benhnhan; 
      // this.hsck.sdt = this.sdt; 
      // this.hsck.namsinh = this.namsinh; 
      this.hsck.lichsuBenhly = this.lsbenhly;
      this.hsck.chuandoan = this.chuandoan; 
      this.hsck.dieutri = this.dieutri;
      // set trang thai =1 --> hoan tat ca kham 
      this.hsck.trangthai = 1; 

    // send put req 
    this.ctlkService.capnhat(this.hsck)
    .subscribe(
      (response: HoSoCaKham) => {
        if ( response != null) {
          this.successMessage = "Cập nhật thành công!"; 

          // setTimeout(() => {
          //   this.dialogRef.close(); 
          // }, 3000);
        }
      },
      (error) => {
      }
    );



  }
  sendEmailBN() {
    throw new Error('Method not implemented.');
  }
  sendEmailBS() {
    throw new Error('Method not implemented.');
  }
}
