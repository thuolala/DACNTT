import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CaKham } from 'app/ds-lichkham/lichkham.model';

@Injectable({
  providedIn: 'root'
})
export class LKService {

    private url = 'http://localhost:8080/api/cakham';
    constructor(private http: HttpClient) { }

  them(ck: CaKham): Observable<CaKham> {
    return this.http.post<CaKham>(this.url + '/them', ck);
  }
}
