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
        title: 'Report Analysis System',
        description: 'instaDash - An AI-powered report analysis system for HoneyCom e-commerce, offering actionable business insights.',
        fullDescription: 'instaDash is a data analytics platform currently in development for the HoneyCom e-commerce platform. It provides sales, product, courier, and customer insights for business owners managing multiple shops. The system features AI-driven future predictions and data visualizations using interactive charts.',
        technologies: ['Angular', '.NET', 'MongoDB'],
        repoUrl: 'https://github.com/ally-bees/ab.uom.project',
        image: 'assets/1.jpg'
      },
      {
        title: 'Ayman Al Madina HR Services',
        description: 'Connecting talent with opportunity through personalized recruitment and staffing solutions in the UAE.',
        fullDescription: 'Ayman Al Madina Human Resources is a dedicated HR service provider based in Ajman, UAE, offering professional recruitment solutions. With hands-on industry experience, we help businesses find the right candidates and support job seekers in landing the right roles. Our services include talent sourcing, candidate matching, screening, end-to-end hiring support, and free consultation services tailored to your hiring goals.',
        technologies: ['Recruitment', 'HR Consultation', 'Talent Matching'],
        liveUrl: 'https://www.aymanalmadinahr.com/',
        image: 'assets/9.jpg'
      },      
      {
        title: 'GRT Travels & Tours Website',
        description: 'Client Project - A travel agency website developed individually for GRT Travels & Tours.',
        fullDescription: 'This individual project involved designing and launching a travel website featuring service listings and package showcases for GRT Travels & Tours. The site is available at https://grttravelsandtours.com/',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      liveUrl: 'https://grttravelsandtours.com/',
        image: 'assets/grttravels.png'
      }, 
      {
        title: 'Micro-Controller Based Hardware Project',
        description: 'A wearable jacket for the kids that tracks movement, heart rate, and temperature, syncing motion with 3D models and rhythm.',
        fullDescription: 'The Interactive Rhyme Jacket is an innovative wearable technology project that combines motion sensors and health monitoring. It tracks movement to control 3D models in a browser and includes rhythmic synchronization, heart rate monitoring, and temperature tracking.',
        technologies: ['Motion Sensors', 'Web Interface', '3D Modeling'],
      repoUrl: 'https://github.com/hhadithya/rhyme-jacket',
        image: 'assets/rhymejacket.png'
      },
      {
        title: 'E-commerce Website - MerchMora',
        description: ' A full-fledged e-commerce website built as part of an academic assignment.',
        fullDescription: 'MerchMora is an e-commerce web platform created in a team setting. It demonstrates skills in full-stack development, offering product listing, shopping cart functionality, and a user-friendly interface using React, Node.js, and MySQL.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
        repoUrl: 'https://github.com/username/merchmora',
        liveUrl: 'https://merchmora-website.onrender.com/',
        image: 'assets/proj3.png'
      },
      {
        title: 'Client Website Development',
        description: 'Pearl Matrix Solutions - Client-facing responsive websites developed for Pearl Matrix Solutions company.',
        fullDescription: 'As a Frontend Developer under senior guidance, I developed multiple responsive and interactive websites using HTML, CSS, JavaScript, and Bootstrap. These sites were tailored for different clients served by Pearl Matrix Solutions.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        repoUrl: '',
        image: 'assets/pms.png'
      },{
        title: 'Personal Portfolio Website',
        description: 'An interactive portfolio website to display personal projects, skills and contact through email and social media.',
        fullDescription: 'A personal portfolio web app designed to feature individual projects, technologies, and background. Built using Angular for the frontend, it is being integrated with a .NET backend and MongoDB for dynamic content management.',
        technologies: ['Angular', '.NET', 'MongoDB'],
        repoUrl: 'https://github.com/Pramudi02/MyPortfolio',
        image: 'assets/portfolioWebsite.png'
      },
      {
        title: 'Project Management System',
        description: 'A CRUD-enabled web app for showcasing and managing project portfolios while improving project organization.',
        fullDescription: 'Developed as an individual project, this full-stack web application enables users to manage their portfolio content with full CRUD functionalities. It improves project organization and professional visibility.',
        technologies: ['Angular', '.NET', 'MongoDB'],
        repoUrl: 'https://github.com/Pramudi02/projects',
        image: 'assets/portfolioManager.png'
      },
      {
        title: 'MommyCare+ (Ongoing)',
        description: 'An AI-integrated pregnancy and baby care platform for mothers, midwives, and healthcare providers in Sri Lanka.',
        fullDescription :'full-featured healthcare platform designed for Sri Lankan mothers, midwives, and doctors. It offers pregnancy tracking, AI-based predictions for baby weight and gestational diabetes, appointment scheduling, and real-time vaccination monitoring. Users can view growth charts, chat with healthcare providers, access meal plans, follow exercise tips, and manage daily medical records. The platform also includes an educational hub with articles and baby care guides—providing a complete digital companion from pregnancy to early motherhood.',
        technologies: [
          'React', 'Vite', 'TypeScript', 'Tailwind CSS',
          'Node.js', 'Express', 'FastAPI', 'Python',
          'MongoDB', 'Mongoose', 'Socket.IO', 'Chart.js'
        ],
        repoUrl: 'https://github.com/Pramudi02/MommyCare.git',   
        // liveUrl: 'https://maternitycareplus.onrender.com/',          
        image: 'assets/maternitycareplus.png'                        
      },
      {
        title: 'Travel & Visa Passport Service Website',
        description: 'Tech-Triathlon 2024 - A React Native travel site created for a tourism promotion hackathon in Sri Lanka.',
        fullDescription: 'Developed during the Tech-Triathlon 2024 by Rootcode, this website promotes Sri Lankan tourism. It includes features for visa information and travel services. This project was a part of designathon, hackathon, and datathon events.',
        technologies: ['React Native'],
        repoUrl: '',
        image: 'assets/techtriathlon2024.png'
      },
      {
        title: 'Book Store App (Ongoing)',
        description: 'A feature-rich bookstore web app with inventory and order management.',
        fullDescription: 'This MERN stack application is a fully functional online bookstore, including an admin panel, inventory system, secure authentication, cart, and checkout features. It supports cash-on-delivery and real-time book updates.',
        technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        repoUrl: '',
        image: 'assets/bookstoreApp.png'
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
