import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-datlich',
  standalone: true,
  imports: [],
  templateUrl: './datlich.component.html',
  styleUrl: './datlich.component.css'
})
export class DatlichComponent {
  constructor(public dialogRef: MatDialogRef<DatlichComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onClose(): void {
    this.dialogRef.close();
  }
}
