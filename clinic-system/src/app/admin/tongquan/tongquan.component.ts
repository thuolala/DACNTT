import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BacSi } from 'app/bacsi/bacsi.model';
import { BenhNhan } from 'app/benhnhan/benhnhan.model';
import { HoSoCaKham } from 'app/datlich/hoso-cakham.model';
import { CaKham } from 'app/ds-lichkham/lichkham.model';

@Component({
  selector: 'app-tongquan',
  standalone: true,
  imports: [],
  templateUrl: './tongquan.component.html',
  styleUrl: './tongquan.component.css'
})
export class TongquanComponent implements OnInit{
  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.getBS();
    this.getBN();
    this.getHSCK();
  }

  // khai bao 
  bsList: BacSi[] = []; 
  bnList: BenhNhan[] = [];
  ckList: CaKham[] = [];
  hsckList: HoSoCaKham[] = []; 
  hsckList_ht: HoSoCaKham[] = []; 
  bsCount = 0;
  bnCount = 0;
  hsckCount = 0;

  // bac si 
  getBS() {
    this.http.get<BacSi[]>('http://localhost:8080/api/bacsi')
      .subscribe(data => {
        this.bsList = data; 
        this.bsCount = this.bsList.length;
      });
  }

  // benh nhan
  getBN() {
    this.http.get<BenhNhan[]>('http://localhost:8080/api/benhnhan')
      .subscribe(data => {
        this.bnList = data; 
        this.bnCount = this.bnList.length;
      });
  }

  // hsck
  getHSCK() {
    this.http.get<HoSoCaKham[]>('http://localhost:8080/api/hoso-cakham')
      .subscribe(data => {
        this.hsckList = data; 

         // lay ra hsck co tt = 1
        for(let i of this.hsckList){
          if(i.trangthai === 1){
            this.hsckList_ht.push(i);
            this.hsckCount = this.hsckList_ht.length;
          }
      }
      });
  }

}
