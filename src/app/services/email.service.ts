import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:3000/api/send-email';

  constructor(private http: HttpClient) { }

  /**
   * Sends email data to the backend API
   * @param emailData The form data containing name, email and message
   * @returns Observable of the API response
   */
  sendEmail(emailData: EmailData): Observable<any> {
    return this.http.post(this.apiUrl, emailData);
  }
}