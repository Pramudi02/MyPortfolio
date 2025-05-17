// email.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EmailData {
  name: string;
  email: string;
  message: string;
  to: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  sendEmail(emailData: EmailData): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-email`, emailData);
  }
}