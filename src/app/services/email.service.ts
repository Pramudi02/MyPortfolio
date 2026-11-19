import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export interface Web3FormsResponse {
  success: boolean;
  message: string;
  data?: any;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = environment.apiUrl || 'https://api.web3forms.com/submit';
  private accessKey = (environment as any).web3FormsAccessKey;

  constructor(private http: HttpClient) {
    if (!this.accessKey || this.accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      console.warn('EmailService: web3FormsAccessKey is not configured. Please add your Web3Forms access key in src/environments/environment.ts');
    }
  }

  /**
   * Sends email data directly via Web3Forms API
   * @param emailData The form data containing name, email and message
   * @returns Observable of the API response
   */
  sendEmail(emailData: EmailData): Observable<Web3FormsResponse> {
    if (!this.accessKey || this.accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      return throwError(() => new Error('Web3Forms access key is not set. Please get a free key from web3forms.com and add it in src/environments/environment.ts.'));
    }

    const payload = {
      access_key: this.accessKey,
      name: emailData.name,
      email: emailData.email,
      message: emailData.message,
      subject: `Portfolio Contact Form: Message from ${emailData.name}`,
      from_name: emailData.name
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post<Web3FormsResponse>(this.apiUrl, payload, { headers }).pipe(
      map(response => {
        if (!response || response.success === false) {
          throw new Error(response?.message || 'Failed to send message');
        }
        return response;
      }),
      catchError(error => {
        const errorMsg = error?.error?.message || error?.message || 'An error occurred while sending your message.';
        return throwError(() => new Error(errorMsg));
      })
    );
  }
}
