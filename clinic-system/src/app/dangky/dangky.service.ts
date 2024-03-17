import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogupService {

    private url = 'http://localhost:8080/api/logup';
    constructor(private http: HttpClient) { }

  logup(hoten: string, sdt: string, email: string, gioitinh: number, namsinh: number, diachi: string, matkhau: string): Observable<string> {
    const data = { hoten, sdt, email, gioitinh, namsinh, diachi, matkhau };
    return this.http.post<string>(this.url, data, { responseType: 'text' as 'json' });
  }
}
