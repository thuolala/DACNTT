import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { BacSi } from './bacsi.model';

@Injectable({
  providedIn: 'root'
})
export class BacSiService {
    private bacsi: BacSi = {
        id: 0,
        hoten: '',
        sdt: '',
        email: '',
        matkhau: ''
    };
    
    private url = 'http://localhost:8080/api/bacsi';
    constructor(private http: HttpClient) { }

    getBacSiById(id: number) {
        return this.http.get<BacSi>(`${this.url}/id/${id}`).pipe(
            catchError(error => {
                console.error('Error fetching Bac Si:', error);
                return throwError(error); 
            })
        );
    }

    getBacSiByEmail(email: string) {
        return this.http.get<BacSi>(`${this.url}/email/${email}`).pipe(
            catchError(error => {
                console.error('Error fetching Bac Si:', error);
                return throwError(error); 
            })
        );
    }

    setBacSi(bacsi: BacSi): void{
        this.bacsi = bacsi;
    }
}
