import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('projectsContainer') projectsContainer!: ElementRef;
  
  currentIndex: number = 0;
  private startX: number = 0;
  private scrollLeft: number = 0;
  private isDragging: boolean = false;
  private cardWidth: number = 340; // card width + margin
  private totalCards: number = 10; // Updated to 10 total projects
  selectedProject: number | null = null;
  projects: Project[] = [
    {
      title: 'Interactive Rhyme Jacket',
      description: 'A wearable tech solution that combines motion sensors and health monitoring to engage kids in fun, music-driven exercise.',
      fullDescription: 'The Interactive Rhyme Jacket is an innovative wearable technology project that combines Arduino-based motion sensors with health monitoring capabilities. It encourages children to exercise through interactive music and movement games. The jacket includes LED displays, heart rate monitoring, and connects to a mobile app for tracking activity.',
      technologies: ['Arduino', 'C++', 'Bluetooth LE', 'Mobile App Development', 'Sensors'],
      repoUrl: 'https://github.com/hhadithya/rhyme-jacket',
      image: 'assets/proj1.png'
    },
    {
      title: 'GRT Travels Website',
      description: 'Designed and developed a responsive website for GRT Travels & Tours, showcasing their services and focusing on user-friendly navigation.',
      fullDescription: 'A modern, responsive website built for GRT Travels & Tours using Angular and Node.js. Features include dynamic content management, booking system integration, and optimized performance. The site showcases travel packages, services, and includes an admin dashboard for content updates.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express', 'Bootstrap'],
      liveUrl: 'https://grttravelsandtours.com/',
      image: 'assets/proj2.png'
    },
    {
      title: 'MerchMora',
      description: 'A comprehensive e-commerce platform built with modern web technologies, featuring seamless shopping experiences.',
      fullDescription: 'MerchMora is a full-featured e-commerce platform that provides a seamless shopping experience. Built with modern web technologies, it includes features like real-time inventory management, secure payment processing, user authentication, and an intuitive admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      repoUrl: 'https://github.com/username/merchmora',
      liveUrl: 'https://merchmora-website.onrender.com/',
      image: 'assets/proj3.png'
    },
    {
      title: 'Website for TechTriathlon',
      description: 'Created an innovative travel and visa passport service website promoting Sri Lankan tourism for Tech-Triathlon 2024.',
      fullDescription: 'Developed a comprehensive travel and visa service platform for Sri Lankan tourism as part of Tech-Triathlon 2024. The website features an intuitive booking system, visa application tracking, and interactive travel guides with cultural insights.',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'Material UI', 'Google Maps API'],
      repoUrl: '#',
      image: 'assets/proj4.png'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Modern portfolio website built with Angular, featuring smooth animations, responsive design, and interactive project showcases.',
      fullDescription: 'A personal portfolio website showcasing my projects and skills. Built with Angular, it features smooth animations, responsive design, and interactive elements. The site includes project showcases, skill demonstrations, and a contact form with email integration.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'AOS Library', 'EmailJS'],
      repoUrl: '#',
      image: 'assets/proj5.png'
    },
    {
      title: 'Weather Dashboard App',
      description: 'Real-time weather application with dynamic updates, location-based forecasts, and interactive weather maps using OpenWeatherMap API.',
      fullDescription: 'A comprehensive weather dashboard that provides real-time weather information and forecasts. Features include location-based weather updates, interactive maps, severe weather alerts, and detailed meteorological data visualization.',
      technologies: ['Angular', 'OpenWeatherMap API', 'Chart.js', 'Leaflet Maps', 'PWA'],
      repoUrl: '#',
      image: 'assets/proj6.png'
    },
    {
      title: 'Task Management System',
      description: 'Full-stack task management application with user authentication, real-time updates, and collaborative features using MEAN stack.',
      fullDescription: 'A robust task management system built with the MEAN stack. Features include user authentication, real-time updates, task delegation, progress tracking, and team collaboration tools. The system supports file attachments and integrates with calendar applications.',
      technologies: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'Socket.io'],
      repoUrl: '#',
      image: 'assets/proj7.png'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Comprehensive social media analytics dashboard with real-time data visualization, sentiment analysis, and engagement metrics.',
      fullDescription: 'A powerful social media analytics dashboard that provides insights across multiple platforms. Features include real-time data visualization, sentiment analysis, engagement metrics tracking, and automated reporting. Supports integration with major social media platforms.',
      technologies: ['React', 'D3.js', 'Node.js', 'Social Media APIs', 'AWS'],
      repoUrl: '#',
      image: 'assets/proj8.png'
    },
    {
      title: 'E-Learning Platform',
      description: 'Interactive learning management system with video courses, progress tracking, and assessment tools using Angular and Node.js.',
      fullDescription: 'A comprehensive e-learning platform built for modern education needs. Features include video course hosting, progress tracking, interactive assessments, certificate generation, and student analytics. Supports both live and recorded content delivery.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'WebRTC', 'AWS S3'],
      repoUrl: '#',
      image: 'assets/proj9.png'
    },
    {
      title: 'Healthcare Management System',
      description: 'Secure healthcare platform for patient records management, appointment scheduling, and medical data visualization.',
      fullDescription: 'A secure and compliant healthcare management system designed for medical facilities. Features include electronic health records, appointment scheduling, prescription management, billing integration, and secure messaging between healthcare providers and patients.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'HIPAA Compliance', 'JWT'],
      repoUrl: '#',
      image: 'assets/proj10.png'
    }
  ];

  ngOnInit() {
    AOS.init({
      duration: 1200,     // Slightly longer duration
      once: false,        // Animation will occur every time
      mirror: false,      // Disable mirror effect for cleaner animations
      offset: 100,
      easing: 'ease-in-out', // Smoother easing
      anchorPlacement: 'top-bottom' // Trigger animation when the top of the element hits the bottom of the viewport
    });
  }

  ngAfterViewInit() {
    const container = document.querySelector('.projects-container') as HTMLElement;
    
    // Mouse events
    container.addEventListener('mousedown', (e: MouseEvent) => this.startDragging(e));
    container.addEventListener('mousemove', (e: MouseEvent) => this.onDrag(e));
    container.addEventListener('mouseup', () => this.stopDragging());
    container.addEventListener('mouseleave', () => this.stopDragging());

    // Touch events
    container.addEventListener('touchstart', (e: TouchEvent) => this.startDraggingTouch(e));
    container.addEventListener('touchmove', (e: TouchEvent) => this.dragTouch(e));
    container.addEventListener('touchend', () => this.stopDragging());
  }

  startDragging(event: MouseEvent) {
    this.isDragging = true;
    const container = document.querySelector('.projects-container') as HTMLElement;
    container.style.cursor = 'grabbing';
    container.style.userSelect = 'none';
    this.startX = event.pageX - container.offsetLeft;
    this.scrollLeft = container.scrollLeft;
  }

  startDraggingTouch(e: TouchEvent) {
    if (e.touches.length === 1) {
      this.isDragging = true;
      const container = document.querySelector('.projects-container') as HTMLElement;
      this.startX = e.touches[0].pageX - container.offsetLeft;
      this.scrollLeft = container.scrollLeft;
    }
  }

  onDrag(event: MouseEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    const container = document.querySelector('.projects-container') as HTMLElement;
    const x = event.pageX - container.offsetLeft;
    const walk = (x - this.startX) * 2;
    container.scrollLeft = this.scrollLeft - walk;
  }

  dragTouch(e: TouchEvent) {
    if (!this.isDragging || e.touches.length !== 1) return;
    const container = document.querySelector('.projects-container') as HTMLElement;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - this.startX) * 2;
    container.scrollLeft = this.scrollLeft - walk;
  }

  stopDragging() {
    this.isDragging = false;
    const container = document.querySelector('.projects-container') as HTMLElement;
    container.style.cursor = 'grab';
    container.style.removeProperty('user-select');

    // Snap to nearest card with circular behavior
    const scrollLeft = container.scrollLeft;
    let nearestCard = Math.round(scrollLeft / this.cardWidth);

    // Handle circular scrolling
    if (nearestCard >= this.totalCards) {
      nearestCard = 0;
      container.scrollLeft = 0;
    } else if (nearestCard < 0) {
      nearestCard = this.totalCards - 1;
      container.scrollLeft = nearestCard * this.cardWidth;
    }

    this.goToSlide(nearestCard);
  }

  slidePrev() {
    if (this.currentIndex <= 0) {
      // Jump to the last card instantly
      this.currentIndex = this.totalCards - 1;
      const container = document.querySelector('.projects-container') as HTMLElement;
      container.scrollLeft = this.currentIndex * this.cardWidth;
    } else {
      this.goToSlide(this.currentIndex - 1);
    }
  }

  slideNext() {
    if (this.currentIndex >= this.totalCards - 1) {
      // Jump to the first card instantly
      this.currentIndex = 0;
      const container = document.querySelector('.projects-container') as HTMLElement;
      container.scrollLeft = 0;
    } else {
      this.goToSlide(this.currentIndex + 1);
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    const container = document.querySelector('.projects-container') as HTMLElement;
    container.scrollTo({
      left: this.currentIndex * this.cardWidth,
      behavior: 'smooth'
    });
  }

  openModal(index: number): void {
    this.selectedProject = index;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  // Close modal when clicking outside
  onModalClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.closeModal();
    }
  }
}
