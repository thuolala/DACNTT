import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-qr',
  standalone: true,
  imports: [NgxScannerQrcodeModule, CommonModule, FormsModule],
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.css'
})
export class QrComponent implements OnInit{

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<QrComponent>){
  }
  qrdata: string = '';
  @ViewChild('qrData') qrData!: ElementRef;
  ngOnInit(): void {
    
  }

  onScan(): void{
    this.qrdata = this.qrData.nativeElement.value.toString();
    alert(this.qrdata);
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
