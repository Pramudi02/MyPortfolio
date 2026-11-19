import { Injectable } from '@angular/core';
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
  private recipient = (environment as any).contactEmail || 'pramupiyumika@gmail.com';

  /**
   * Opens the user's default email client pre-filled with the contact form message
   * @param data The form data containing name, email, and message
   */
  openEmailClient(data: EmailData): void {
    const subject = encodeURIComponent(`Portfolio Contact: Message from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:${this.recipient}?subject=${subject}&body=${body}`;
  }
}

