import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  title: string;
  institution: string;
  period: string;
  image: string;
  description?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      title: 'B.Sc. (Hons) in Information Technology',
      institution: 'University of Moratuwa',
      period: '2022 - Present',
      image: 'assets/university.jpg',
      description: 'Faculty of Information Technology'
    },
    {
      title: 'GCE Advanced Level Examination',
      institution: 'Yasodara Devi Balika Vidyalaya - Gampaha',
      period: '2021',
      image: 'assets/school.jpg'
    },
    {
      title: 'GCE Ordinary Level Examination',
      institution: 'Yasodara Devi Balika Vidyalaya - Gampaha',
      period: '2018',
      image: 'assets/school.jpg'
    }
  ];
}