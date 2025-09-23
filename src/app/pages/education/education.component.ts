import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';

interface Education {
  title: string;
  institution?: string;
  period: string;
  image: string;
  eduDescription?: string;
  type?: 'university' | 'school';
  grades?: string[];
  zScore?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  
  educationList: Education[] = [
    {
      title: 'B.Sc. (Hons) Degree in Information Technology',
      institution: 'University of Moratuwa',
      period: '2022 - 2027 (Expected)',
      image: 'assets/university.jpg',
      eduDescription: 'Faculty of Information Technology',
      type: 'university'
    },
    {
      title: 'Yasodara Devi Balika Vidyalaya - Gampaha',
      period: '2018 - 2021',
      image: 'assets/school.png',
      eduDescription: 'Successfully completed both GCE Advanced Level (2021) and Ordinary Level (2018) examinations',
      type: 'school'
    },
    {
      title: 'Technical Careerist Association - Sri Lanka',
      period: '2021 - 2022',
      image: 'https://sltca20.wordpress.com/wp-content/uploads/2020/12/44.jpg',
      eduDescription: 'Certificate Course in Computer Science, HR Management (FL), Graphic Design',
      type: 'school'
    }
  ];

  ngOnInit() {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: false,
      offset: 100,
      easing: 'ease-in-out',
      anchorPlacement: 'top-bottom'
    });
  }


}