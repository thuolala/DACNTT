import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HoSoCaKham } from './hoso-cakham.model';

@Injectable({
  providedIn: 'root'
})
export class DatlichService {

    private url = 'http://localhost:8080/api/hoso-cakham/dat-lich';
    constructor(private http: HttpClient) { }

  datlich(hsck: HoSoCaKham): Observable<HoSoCaKham> {
    return this.http.post<HoSoCaKham>(this.url, hsck);
  }
}
