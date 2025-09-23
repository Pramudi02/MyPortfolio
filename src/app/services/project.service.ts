import { Injectable } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      title: 'Report Analysis System',
      description: 'instaDash - An AI-powered report analysis system for HoneyCom e-commerce, offering actionable business insights.',
      fullDescription: 'instaDash is a data analytics platform currently in development for the HoneyCom e-commerce platform. It provides sales, product, courier, and customer insights for business owners managing multiple shops. The system features AI-driven future predictions and data visualizations using interactive charts.',
      technologies: ['Angular', '.NET', 'MongoDB'],
      repoUrl: 'https://github.com/ally-bees/ab.uom.project',
      image: 'assets/1.jpg'
    },
    {
      title: 'MommyCare+ (Ongoing)',
      description: 'An AI-integrated pregnancy and baby care platform for mothers, midwives, and healthcare providers in Sri Lanka.',
      fullDescription: 'full-featured healthcare platform designed for Sri Lankan mothers, midwives, and doctors. It offers pregnancy tracking, AI-based predictions for baby weight and gestational diabetes, appointment scheduling, and real-time vaccination monitoring. Users can view growth charts, chat with healthcare providers, access meal plans, follow exercise tips, and manage daily medical records. The platform also includes an educational hub with articles and baby care guides—providing a complete digital companion from pregnancy to early motherhood.',
      technologies: [
        'React', 'Vite', 'TypeScript', 'Tailwind CSS',
        'Node.js', 'Express', 'FastAPI', 'Python',
        'MongoDB', 'Mongoose', 'Socket.IO', 'Chart.js'
      ],
      repoUrl: 'https://github.com/Pramudi02/MommyCare.git',
      image: 'assets/maternitycareplus.png'
    },
    {
      title: 'Secura',
      description: '🛡️ Secura - AI-Powered Cyber Incident Management System Next.js FastAPI Firebase Python TypeScript Production Ready',
      fullDescription: 'Secura is a comprehensive, AI-powered cybersecurity incident management platform designed to streamline incident reporting, enhance threat analysis, and facilitate real-time collaboration between employees, security teams, and administrators. Key Features include AI-Powered Security Analysis with Smart Incident Categorization (85%+ accuracy with confidence scoring), Severity Assessment with multi-factor analysis, Mitigation Strategies with context-aware recommendations, Threat Intelligence with industry pattern analysis, and Predictive Analytics for future incident forecasting. Role-Based Access Control supports Employee incident reporting, Security Team advanced analysis and collaboration, and Admin user management with executive insights. Comprehensive Analytics include real-time dashboards, performance metrics, compliance reports, and system health monitoring. Real-time Communication features WebSocket integration, incident threading, file sharing, and status updates.',
      technologies: ['Next.js', 'FastAPI', 'Firebase', 'Python', 'TypeScript'],
      repoUrl: 'https://github.com/AdithaBuwaneka/Secura.git',
      image: 'assets/cyber.jpg'
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
      title: 'Project Management System',
      description: 'A CRUD-enabled web app for showcasing and managing project portfolios while improving project organization.',
      fullDescription: 'Developed as an individual project, this full-stack web application enables users to manage their portfolio content with full CRUD functionalities. It improves project organization and professional visibility.',
      technologies: ['Angular', '.NET', 'MongoDB'],
      repoUrl: 'https://github.com/Pramudi02/projects',
      image: 'assets/portfolioManager.png'
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
    },
    {
      title: 'Personal Portfolio Website',
      description: 'An interactive portfolio website to display personal projects, skills and contact through email and social media.',
      fullDescription: 'A personal portfolio web app designed to feature individual projects, technologies, and background. Built using Angular for the frontend, it is being integrated with a .NET backend and MongoDB for dynamic content management.',
      technologies: ['Angular', '.NET', 'MongoDB'],
      repoUrl: 'https://github.com/Pramudi02/MyPortfolio',
      image: 'assets/portfolioWebsite.png'
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

  getProjects(): Project[] {
    return this.projects;
  }
}
