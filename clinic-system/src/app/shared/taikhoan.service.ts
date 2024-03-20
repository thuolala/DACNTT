import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Taikhoan } from './taikhoan.model';

@Injectable({
  providedIn: 'root'
})
export class TaikhoanService {

    private url = 'http://localhost:8080/api/taikhoan';
    constructor(private http: HttpClient) { }

    getTKByEmail(email: string): Observable<Taikhoan> {
    return this.http.get<Taikhoan>(this.url + "/email/" + email);
    }
  
    capnhat(taikhoan: Taikhoan): Observable<Taikhoan> {
      const id = taikhoan.id;
      return this.http.put<Taikhoan>(`${this.url}/chinhsua/${id}` , taikhoan);
    }

    them(taikhoan: Taikhoan): Observable<Taikhoan> {
        return this.http.post<Taikhoan>(`${this.url}/them` , taikhoan);
      }
}
