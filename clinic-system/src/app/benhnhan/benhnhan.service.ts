import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BenhNhan } from './benhnhan.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private url = 'http://localhost:8080/api/benhnhan';
    constructor(private http: HttpClient) { }

    getBenhNhan(email: string): Observable<BenhNhan> {
    return this.http.get<BenhNhan>(this.url + "/" + email);
  }
}
