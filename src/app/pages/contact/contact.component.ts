// contact.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  success = false;
  loading = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    // Stop if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;
    
    // Replace with your actual backend API endpoint
    const endpoint = 'https://your-api-endpoint/send-email';
    
    const emailData = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
      to: 'pramupiyumika@gmail.com' // Your email address
    };

    this.http.post(endpoint, emailData)
      .subscribe({
        next: () => {
          this.success = true;
          this.loading = false;
          this.contactForm.reset();
          this.submitted = false;
          setTimeout(() => this.success = false, 5000); // Hide success message after 5 seconds
        },
        error: (error) => {
          this.errorMessage = 'Failed to send message. Please try again later.';
          this.loading = false;
          console.error('Error sending email:', error);
          setTimeout(() => this.errorMessage = '', 5000); // Hide error message after 5 seconds
        }
      });
  }
}