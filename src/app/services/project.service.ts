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
      fullDescription: 'instaDash is a comprehensive data analytics platform being developed for the HoneyCom e-commerce platform. It delivers detailed insights on sales, products, couriers, and customers for business owners managing multiple shops. The system integrates AI-driven future predictions with interactive data visualizations, empowering businesses to make smarter, data-backed decisions. Key features include dynamic charts, predictive analytics, and user-friendly dashboards that transform raw data into actionable insights.',
      technologies: ['Angular', '.NET', 'MongoDB', 'Chart.js', 'AG Grid', 'REST APIs'],
      repoUrl: 'https://github.com/ally-bees/ab.uom.project',
      image: 'assets/1.jpg'
    },
    {
      title: 'MommyCare+ (Ongoing)',
      description: 'An AI-integrated pregnancy and baby care platform for mothers, midwives, and healthcare providers in Sri Lanka.',
      fullDescription: 'MommyCare is a comprehensive pregnancy and baby care platform designed for moms, doctors, midwives, service providers, and admins. It enables secure role-based access and supports features like mom profile management, clinic visit and vaccination tracking, appointment scheduling, product management, and real-time messaging. The platform also integrates AI-powered predictions for baby weight and diabetes risk using real datasets, making healthcare more personalized and accessible.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Tailwind CSS', 'AI/ML Models'],
      repoUrl: 'https://github.com/Pramudi02/MommyCare.git',
      image: 'assets/maternitycareplus.png'
    },
    {
      title: 'Secura - Cyber Incident Management',
      description: '🛡️ Secura - AI-Powered Cyber Incident Management System Next.js FastAPI Firebase Python TypeScript Production Ready',
      fullDescription: 'Secura is a production-ready, AI-driven cybersecurity incident management platform that simplifies incident reporting, enhances threat analysis, and enables real-time collaboration between employees, security teams, and administrators.It leverages AI-powered security analysis with smart incident categorization, severity assessment, context-aware mitigation strategies, and predictive analytics. The platform also provides real-time dashboards, compliance reporting, and secure communication channels, ensuring faster response times and improved organizational resilience.',
      technologies: ['Next.js', 'FastAPI', 'Firebase', 'Python', 'TypeScript', 'WebSockets', 'ImageKit'],
      repoUrl: 'https://github.com/AdithaBuwaneka/Secura.git',
      image: 'assets/cyber.jpg'
    },
    {
      title: 'Micro-Controller Based Hardware Project',
      description: 'A wearable jacket for the kids that tracks movement, heart rate, and temperature, syncing motion with 3D models and rhythm.',
      fullDescription: 'Rhyme FIT is an innovative wearable project designed to promote physical activity and mental engagement in children through interactive play. The smart jacket integrates motion and health sensors to track real-time body movements, synchronizing them with a 3D model on a web interface. Children progress through levels by syncing their exercises with rhyme songs, fostering both physical agility and cognitive focus in a fun, gamified experience. The system also monitors heart rate and body temperature, ensuring safe participation while combining exercise, rhythm, and learning.',
      technologies: ['MPU6050', 'Flex Sensors', 'MAX30102', 'DS18B20', 'WS2812B LED', 'TCA9548A', 'PCB Design', 'Embedded C', 'Web Interface', '3D Modeling'],
      repoUrl: 'https://github.com/hhadithya/rhyme-jacket',
      image: 'assets/rhymejacket.png'
    },
    {
      title: 'Project Management System',
      description: 'A CRUD-enabled web app for showcasing and managing project portfolios while improving project organization.',
      fullDescription: 'Developed as an individual project, this full-stack web application enables users to manage their portfolio content with full CRUD functionalities. It improves project organization and professional visibility. responsive layouts, and a sleek glassmorphism design system. Features include dark theme and smooth animations.',
      technologies: ['Angular', '.NET', 'MongoDB', 'SCSS'],
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
      title: 'Personal Portfolio Website',
      description: 'An interactive portfolio website to display personal projects, skills and contact through email and social media.',
      fullDescription: 'This is my personal portfolio website, fully developed and deployed to showcase my skills, projects, and creative work as an IT undergraduate, web UI designer, and digital artist. The platform focuses on clean UI/UX, interactive elements, and professional presentation, allowing visitors to explore my projects, skills, and contact me directly.',
      technologies: ['Angular', 'Node.js/Express', 'Nodemailer', 'RESTful APIs', 'CSS'],
      repoUrl: 'https://github.com/Pramudi02/MyPortfolio',
      image: 'assets/portfolioWebsite.png'
    },
    {
      title: 'CEYELITE - Celebrity Connect Platform',
      description: 'A comprehensive platform that connects users with celebrities, offering features like chat, events, galleries, and role-based access for users, celebrities, and admins.',
      fullDescription: 'CEYELITE is a comprehensive web platform that connects users with celebrities, enabling seamless interactions through chat, events, galleries, and personalized profiles. The platform includes a powerful admin panel to manage users, celebrities, events, and generate reports.With role-based access control, users can explore, chat, and follow celebrities; celebrities can manage profiles, events, and galleries; while admins oversee the entire system with reporting and analytics.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'ESLint', 'PostCSS', 'Autoprefixer', 'Ballerina'],
      repoUrl: 'https://github.com/Pramudi02/balletByte',
      image: 'assets/portfolioWebsite.png'
    },
    {
      title: 'Client Website Development - PMS',
      description: 'Pearl Matrix Solutions - Client-facing responsive websites developed for Pearl Matrix Solutions company.',
      fullDescription: 'As a Frontend Developer under senior guidance, I developed multiple responsive and interactive websites using HTML, CSS, JavaScript, and Bootstrap. These sites were tailored for different clients served by Pearl Matrix Solutions.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      repoUrl: '',
      image: 'assets/pms.png'
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
