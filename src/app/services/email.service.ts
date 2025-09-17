import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = environment.apiUrl || 'https://backend-2d42aqs7x-pramudi02s-projects.vercel.app/api/send-email';

  constructor(private http: HttpClient) { 
    // Debug: Log the API URL being used
    console.log('EmailService initialized with API URL:', this.apiUrl);
    console.log('Environment:', environment);
  }

  /**
   * Sends email data to the backend API
   * @param emailData The form data containing name, email and message
   * @returns Observable of the API response
   */
  sendEmail(emailData: EmailData): Observable<any> {
    console.log('Sending email to:', this.apiUrl);
    return this.http.post(this.apiUrl, emailData);
  }
}