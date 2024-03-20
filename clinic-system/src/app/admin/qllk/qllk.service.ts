import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CaKham } from 'app/ds-lichkham/lichkham.model';

@Injectable({
  providedIn: 'root'
})
export class CaKhamService {

    private url = 'http://localhost:8080/api/cakham';
    constructor(private http: HttpClient) { }
  
    capnhat(cakham: CaKham): Observable<CaKham> {
      const id = cakham.id;
      return this.http.put<CaKham>(`${this.url}/chinhsua/${id}` , cakham);
    }

    them(cakham: CaKham): Observable<CaKham> {
        return this.http.post<CaKham>(`${this.url}/them` , cakham);
    }
}
