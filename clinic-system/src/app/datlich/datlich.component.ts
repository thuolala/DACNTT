import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-datlich',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './datlich.component.html',
  styleUrl: './datlich.component.css'
})
export class DatlichComponent {
  @ViewChild('benhnhanInput')
  benhnhanInput!: ElementRef;
  
  loaicakham: string = '';
  bacsi: string = ''; 
  benhnhan: string = ''; 
  sdt: string = ''; 
  email: string = ''; 
  namsinh = 0; 
  lsbenhly: string = ''; 
  ngaykham: string = ''; 
  giokham: string = ''; 

  constructor(public dialogRef: MatDialogRef<DatlichComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  send(){
    this.benhnhan = this.benhnhanInput.nativeElement.value;
    // alert(this.data.cakham.id);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
