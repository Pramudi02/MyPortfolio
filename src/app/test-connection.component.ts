// test-connection.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-test-connection',
    imports: [CommonModule],
    template: `
    <div>
      <h2>Backend Connection Test</h2>
      <button (click)="testConnection()">Test Connection</button>
      <div *ngIf="response">
        <h3>Response:</h3>
        <pre>{{ response | json }}</pre>
      </div>
      <div *ngIf="error">
        <h3>Error:</h3>
        <pre>{{ error }}</pre>
      </div>
    </div>
  `
})
export class TestConnectionComponent implements OnInit {
  response: any;
  error: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  testConnection() {
    this.http.get('http://localhost:3000/test').subscribe({
      next: (data) => {
        this.response = data;
        console.log('Connection successful:', data);
      },
      error: (err) => {
        this.error = `Connection failed: ${JSON.stringify(err)}`;
        console.error('Connection failed:', err);
      }
    });
  }
}