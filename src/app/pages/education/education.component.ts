import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';

interface Education {
  title: string;
  institution: string;
  period: string;
  image: string;
  description?: string;
  fullDescription?: string;
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
  selectedEducation: number | null = null;
  
  educationList: Education[] = [
    {
      title: 'B.Sc. (Hons) Degree in Information Technology',
      institution: 'University of Moratuwa',
      period: '2022 - 2027 (Expected)',
      image: 'assets/university.jpg',
      description: 'Faculty of Information Technology',
      fullDescription: 'Currently pursuing a Bachelor of Science (Honors) degree in Information Technology at the prestigious University of Moratuwa, Faculty of Information Technology. This comprehensive program provides in-depth knowledge in software development, database management, web technologies, artificial intelligence, and emerging IT trends. The curriculum includes practical projects, industry collaborations, research opportunities, and hands-on experience with cutting-edge technologies. Expected to graduate in 2027 with a strong foundation in both theoretical and practical aspects of Information Technology.',
      type: 'university'
    },
    {
      title: 'Yasodara Devi Balika Vidyalaya',
      institution: 'Gampaha',
      period: '2018 - 2021',
      image: 'assets/school.jpg',
      description: 'Successfully completed both GCE Advanced Level (2021) and Ordinary Level (2018) examinations',
      fullDescription: 'Successfully completed both GCE Advanced Level (2021) and Ordinary Level (2018) examinations with outstanding results. Advanced Level examination achieved a Z-Score of 1.8999 with excellent grades: Combined Mathematics (B), Information Communication Technology (A), and Physics (A). Ordinary Level examination achieved distinction with 9 A\'s across all subjects, demonstrating comprehensive academic excellence and strong analytical and problem-solving skills essential for pursuing higher education in Information Technology.',
      type: 'school'
    },
    {
      title: 'Technical Careerist Association - Sri Lanka',
      institution: '',
      period: '2021 - 2022',
      image: 'https://sltca20.wordpress.com/wp-content/uploads/2020/12/44.jpg',
      description: 'Certificate Course in Computer Science, HR Management (FL), Graphic Design',
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

  openModal(index: number): void {
    this.selectedEducation = index;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedEducation = null;
    document.body.style.overflow = 'auto';
  }

  onModalClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.closeModal();
    }
  }
}