import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BacSi } from 'app/bacsi/bacsi.model';

@Injectable({
  providedIn: 'root'
})
export class CTBSService {

  private url = 'http://localhost:8080/api/bacsi';
  constructor(private http: HttpClient) { }

  capnhat(bacsi: BacSi): Observable<BacSi> {
    const idbs = bacsi.id;
    return this.http.put<BacSi>(`${this.url}/chinhsua/${idbs}` , bacsi);
  }

  them(bacsi: BacSi): Observable<BacSi> {
    return this.http.post<BacSi>(`${this.url}/them` , bacsi);
  }
}
