import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HoSoCaKham } from 'app/datlich/hoso-cakham.model';

@Injectable({
  providedIn: 'root'
})
export class CTLKServiceBS {

    private url = 'http://localhost:8080/api/hoso-cakham/chinhsua';
    constructor(private http: HttpClient) { }

  capnhat(hsck: HoSoCaKham): Observable<HoSoCaKham> {
    const idhs = hsck.id;
    return this.http.put<HoSoCaKham>(`${this.url}/${idhs}` , hsck);
  }
}
