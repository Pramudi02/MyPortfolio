import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact',
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  success = false;
  error = false;
  loading = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get formControls() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    
    // Stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;
    this.success = false;
    this.error = false;
    
    this.emailService.sendEmail(this.contactForm.value).subscribe({
      next: (response) => {
        this.success = true;
        this.loading = false;
        this.contactForm.reset();
        this.submitted = false;
      },
      error: (error) => {
        this.error = true;
        this.loading = false;
        this.errorMessage = error.message || 'An error occurred while sending your message.';
      }
    });
  }
}