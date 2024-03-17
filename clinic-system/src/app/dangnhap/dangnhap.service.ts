import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    private url = 'http://localhost:8080/api/login';

    constructor(private http: HttpClient) { }

    login(email: string, matkhau: string): Observable<string> {
        const credentials = { email, matkhau };
        return this.http.post<string>(this.url, credentials, { responseType: 'text' as 'json' });
    }
}
