import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnDestroy {
  contactForm: FormGroup;
  submitted = false;
  success = false;
  error = false;
  loading = false;
  errorMessage = '';
  private successTimeout?: number;
  private errorTimeout?: number;

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

    // Clear any existing timeouts
    this.clearTimeouts();

    this.loading = true;
    this.success = false;
    this.error = false;
    
    try {
      this.emailService.openEmailClient(this.contactForm.value);
      this.success = true;
      this.loading = false;
      this.contactForm.reset();
      this.submitted = false;

      // Hide success message after 6 seconds
      this.successTimeout = window.setTimeout(() => {
        this.success = false;
      }, 6000);
    } catch (err: any) {
      this.loading = false;
      this.error = true;
      this.errorMessage = err?.message || 'Could not open your email application.';

      this.errorTimeout = window.setTimeout(() => {
        this.error = false;
        this.errorMessage = '';
      }, 5000);
    }
  }

  ngOnDestroy(): void {
    this.clearTimeouts();
  }

  private clearTimeouts() {
    if (this.successTimeout) {
      clearTimeout(this.successTimeout);
      this.successTimeout = undefined;
    }
    if (this.errorTimeout) {
      clearTimeout(this.errorTimeout);
      this.errorTimeout = undefined;
    }
  }
}