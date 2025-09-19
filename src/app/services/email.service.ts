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
  // Use the URL provided by the environment files. Ensure it's defined.
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { 
    if (!this.apiUrl) {
      console.warn('EmailService: environment.apiUrl is not set. Email requests will fail until it is configured.');
    } else {
      console.debug('EmailService initialized with API URL:', this.apiUrl);
    }
  }

  /**
   * Sends email data to the backend API
   * @param emailData The form data containing name, email and message
   * @returns Observable of the API response
   */
  sendEmail(emailData: EmailData): Observable<any> {
  return this.http.post(this.apiUrl, emailData);
  }
}