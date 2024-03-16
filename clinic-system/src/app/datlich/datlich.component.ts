import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HoSoCaKham } from './hoso-cakham.model';
import { DatlichService } from './datlich.service';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import { SafeUrl } from '@angular/platform-browser';
import { SendEmailService } from 'app/shared/send-email.service';
import { BacSiService } from 'app/doctor/doctor.service';
import { BacSi } from 'app/doctor/bacsi.model';

@Component({
  selector: 'app-datlich',
  standalone: true,
  imports: [FormsModule, CommonModule, QRCodeModule],
  templateUrl: './datlich.component.html',
  styleUrl: './datlich.component.css'
})
export class DatlichComponent {
  @ViewChild('benhnhanInput') benhnhanInput!: ElementRef;
  @ViewChild('bacsiInput') bacsiInput!: ElementRef;
  @ViewChild('sdtInput') sdtInput!: ElementRef;
  @ViewChild('namsinhInput') namsinhInput!: ElementRef;
  @ViewChild('lsbenhlyInput') lsbenhlyInput!: ElementRef;
  @ViewChild('ngaykhamInput') ngaykhamInput!: ElementRef;
  @ViewChild('giokhamInput') giokhamInput!: ElementRef;
  @ViewChild('chuandoanInput') chuandoanInput!: ElementRef;
  @ViewChild('dieutriInput') dieutriInput!: ElementRef;
  @ViewChild('dlBtn') dlBtn!: ElementRef;

  successMessage: string | null = null;
  id_hsck : string = '';
  qrCodeDownloadLink: SafeUrl = "";
  dlBtnDisabled: boolean = false;

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

  bs: BacSi = {
    id: 0,
    hoten: '',
    sdt: '',
    email: '',
    matkhau: ''
  }
  
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DatlichComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public dlService: DatlichService, private sendemailService: SendEmailService, public bsService: BacSiService) { }

  send(){
    //set as HoSo_CaKham object 
    this.loaicakham = this.data.cakham.loaicakham;
    this.bacsi = this.bacsiInput.nativeElement.value;
    this.id_bacsi = this.data.cakham.idBacsi;
    this.id_cakham = this.data.cakham.id; 
    this.id_benhnhan = this.data.benhnhan.id; 
    this.benhnhan = this.benhnhanInput.nativeElement.value;
    this.sdt = this.sdtInput.nativeElement.value;
    this.email = this.data.benhnhan.email;
    this.namsinh = this.namsinhInput.nativeElement.value;
    this.lsbenhly = this.lsbenhlyInput.nativeElement.value.toString();
    this.ngaykham = this.ngaykhamInput.nativeElement.value; 
    this.giokham = this.giokhamInput.nativeElement.value; 
    this.chuandoan = this.chuandoanInput.nativeElement.value; 
    this.dieutri = this.dieutriInput.nativeElement.value; 
    this.trangthai = 0;

    this.hsck = {id: 0, loaicakham: this.loaicakham, bacsi: this.bacsi, idBacsi: this.id_bacsi, idCakham : this.id_cakham, 
                 idBenhnhan: this.id_benhnhan, benhnhan: this.benhnhan, sdt: this.sdt, 
                 email: this.email, namsinh: Number(this.namsinh), lichsuBenhly: this.lsbenhly, 
                 ngaykham: this.ngaykham.toString(), giokham: this.giokham.toString(), chuandoan: this.chuandoan, 
                 dieutri: this.dieutri, trangthai: this.trangthai};

    // send post req 
    this.dlService.datlich(this.hsck)
      .subscribe(
        (response: HoSoCaKham) => {
          if ( response != null) {
            this.id_hsck = response.id.toString();
            this.successMessage = "Đặt lịch thành công!"; 
            this.dlBtnDisabled = true;
            this.sendEmailBN();
            this.sendEmailBS(); 

            // setTimeout(() => {
            //   this.dialogRef.close(); 
            // }, 3000);
          }
        },
        (error) => {
        }
      );
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
  
  onClose(): void {
    this.dialogRef.close();
  }

  sendEmailBN() {
    const to = this.email;
    const subject = 'Xác nhận lịch khám bệnh';
    const text = 'Xin chào!\n' + 
                 'Bạn có lịch hẹn khám bệnh với phòng khám Blue vào lúc: ' + this.giokham + ' ngày: ' + this.ngaykham + '\n' + 
                 'Bác sĩ phụ trách: ' + this.bacsi + '\n' + 
                 'Nội dung: ' + this.loaicakham + '\n' + 
                 'Bạn vui lòng có mặt đúng thời gian đã đặt nhé. Blue xin chân thành cảm ơn!';

    this.sendemailService.sendEmail(to, subject, text).subscribe(
      () => {
        console.log('Email sent successfully');
      },
      error => {
        console.error('Error sending email:', error);
      }
    );
  }

  sendEmailBS() {
    this.bsService.getBacSiById(this.id_bacsi).subscribe(
      (bacSi: BacSi) => {
        const to = bacSi.email;
        const subject = 'Bạn có lịch khám bệnh';
        const text = 'Xin chào bác sĩ!\n' + 
                     'Bạn có lịch khám bệnh tại phòng khám Blue vào lúc: ' + this.giokham + ' ngày: ' + this.ngaykham + '\n' + 
                     'Bệnh nhân: ' + this.benhnhan + '\n' + 
                     'Nội dung: ' + this.loaicakham + '\n' + 
                     'Bác sĩ truy cập ứng dụng Blue để xem chi tiết nhé. Blue xin chân thành cảm ơn!';
  
        this.sendemailService.sendEmail(to, subject, text).subscribe(
          () => {
            console.log('Email sent successfully');
          },
          error => {
            console.error('Error sending email:', error);
          }
        );
      },
      error => {
        console.error('Error fetching BacSi:', error);
      }
    );
  }
  

}
