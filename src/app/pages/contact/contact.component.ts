// simplified-contact.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2>Contact Form</h2>
      
      <div *ngIf="successMessage" style="padding: 10px; background-color: #d4edda; color: #155724; border-radius: 4px; margin-bottom: 15px;">
        {{ successMessage }}
      </div>
      
      <div *ngIf="errorMessage" style="padding: 10px; background-color: #f8d7da; color: #721c24; border-radius: 4px; margin-bottom: 15px;">
        {{ errorMessage }}
      </div>
      
      <form (ngSubmit)="sendEmail()" #contactForm="ngForm">
        <div style="margin-bottom: 15px;">
          <label for="name" style="display: block; margin-bottom: 5px;">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            [(ngModel)]="formData.name" 
            required 
            style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;"
          />
        </div>
        
        <div style="margin-bottom: 15px;">
          <label for="email" style="display: block; margin-bottom: 5px;">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            [(ngModel)]="formData.email" 
            required 
            style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;"
          />
        </div>
        
        <div style="margin-bottom: 15px;">
          <label for="message" style="display: block; margin-bottom: 5px;">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            [(ngModel)]="formData.message" 
            required 
            rows="5" 
            style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          [disabled]="!contactForm.valid || loading" 
          style="background-color: #007bff; color: white; border: none; padding: 10px 15px; border-radius: 4px; cursor: pointer;"
        >
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>
      </form>
    </div>
  `
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  
  loading = false;
  successMessage = '';
  errorMessage = '';
  
  constructor(private http: HttpClient) {}
  
  sendEmail() {
    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';
    
    console.log('Sending email with data:', this.formData);
    
    this.http.post('http://localhost:3000/send-email', this.formData)
      .subscribe({
        next: (response: any) => {
          console.log('Email sent successfully:', response);
          this.successMessage = 'Your message has been sent successfully!';
          this.formData = { name: '', email: '', message: '' };
          this.loading = false;
        },
        error: (error) => {
          console.error('Error sending email:', error);
          this.errorMessage = 'Failed to send message. Please try again later.';
          this.loading = false;
        }
      });
  }
}