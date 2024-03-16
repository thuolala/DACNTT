import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BenhNhan } from 'app/user/benhnhan.model';

@Injectable({
  providedIn: 'root'
})
export class BenhNhanService {
  private benhnhan : BenhNhan = {
      id: 0,
      hoten: '',
      sdt: '',
      email: '',
      gioitinh: 0,
      namsinh: 0,
      diachi: ''
  }; 

  constructor() {}

  getBenhNhan(): BenhNhan {
    return this.benhnhan;
  }

  setBenhNhan(benhNhan: BenhNhan): void {
    this.benhnhan = benhNhan;
  }
}
