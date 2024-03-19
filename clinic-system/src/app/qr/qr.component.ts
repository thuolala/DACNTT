import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { QRScanner } from './qr-scanner';

@Component({
  selector: 'app-qr',
  standalone: true,
  imports: [NgxScannerQrcodeModule, CommonModule, FormsModule],
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.css'
})
export class QrComponent implements OnInit{

  qrScanner!: QRScanner;
  qrData: string | null = null;
  
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<QrComponent>){
    this.qrScanner = new QRScanner();
  }

  startScan() {
    this.qrScanner.startScan((result) => {
      console.log('Scanned QR code:', result);
      this.qrData = result;
    });
  }

  stopScan() {
    this.qrScanner.stopScan();
    this.qrData = null;
  }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  

}
