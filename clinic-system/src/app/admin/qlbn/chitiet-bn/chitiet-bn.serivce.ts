import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BenhNhan } from 'app/benhnhan/benhnhan.model';

@Injectable({
  providedIn: 'root'
})
export class CTBNService {

  private url = 'http://localhost:8080/api/benhnhan';
  constructor(private http: HttpClient) { }

  capnhat(benhnhan: BenhNhan): Observable<BenhNhan> {
    const idbn = benhnhan.id;
    return this.http.put<BenhNhan>(`${this.url}/chinhsua/${idbn}` , benhnhan);
  }

  them(benhnhan: BenhNhan): Observable<BenhNhan> {
    return this.http.post<BenhNhan>(`${this.url}/them` , benhnhan);
  }
}
