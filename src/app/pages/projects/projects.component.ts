import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service'; // Adjust the path accordingly
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = []; // Initialize an empty array for projects

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch project data from the API
    this.http.get<any[]>('http://localhost:5000/api/projects')
      .subscribe((data) => {
        this.projects = data;
      }, (error) => {
        console.error('Error fetching projects:', error);
      });
  }
}
