import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  private url = 'http://localhost:8080/api/send-email';

  constructor(private http: HttpClient) { }

  sendEmail(to: string, subject: string, text: string) {
    const data = { to, subject, text };
    return this.http.post(this.url, data);
  }
}
