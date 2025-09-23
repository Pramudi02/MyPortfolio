import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';
import { ProjectService, Project } from '../../services/project.service';

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
  private totalCards: number = 11; // Updated to 11 total projects
  @Output() openProject: EventEmitter<number> = new EventEmitter<number>();
  selectedProject: number | null = null;
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    AOS.init({
      duration: 1200,     // Slightly longer duration
      once: false,        // Animation will occur every time
      mirror: false,      // Disable mirror effect for cleaner animations
      offset: 100,
      easing: 'ease-in-out', // Smoother easing
      anchorPlacement: 'top-bottom' // Trigger animation when the top of the element hits the bottom of the viewport
    });
    this.projects = this.projectService.getProjects();
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
    // Emit to parent so a centralized modal (on homepage) can open
    this.openProject.emit(index);
    // Keep local state for backward compatibility (no local modal present)
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
