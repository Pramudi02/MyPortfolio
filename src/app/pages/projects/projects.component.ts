import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  standalone: true,
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
    container.addEventListener('mousemove', (e: MouseEvent) => this.drag(e));
    container.addEventListener('mouseup', () => this.stopDragging());
    container.addEventListener('mouseleave', () => this.stopDragging());

    // Touch events
    container.addEventListener('touchstart', (e: TouchEvent) => this.startDraggingTouch(e));
    container.addEventListener('touchmove', (e: TouchEvent) => this.dragTouch(e));
    container.addEventListener('touchend', () => this.stopDragging());
  }

  private startDragging(e: MouseEvent) {
    this.isDragging = true;
    const container = document.querySelector('.projects-container') as HTMLElement;
    this.startX = e.pageX - container.offsetLeft;
    this.scrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing';
    container.style.userSelect = 'none';
  }

  private startDraggingTouch(e: TouchEvent) {
    if (e.touches.length === 1) {
      this.isDragging = true;
      const container = document.querySelector('.projects-container') as HTMLElement;
      this.startX = e.touches[0].pageX - container.offsetLeft;
      this.scrollLeft = container.scrollLeft;
    }
  }

  private drag(e: MouseEvent) {
    if (!this.isDragging) return;
    e.preventDefault();
    const container = document.querySelector('.projects-container') as HTMLElement;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - this.startX) * 2;
    container.scrollLeft = this.scrollLeft - walk;
  }

  private dragTouch(e: TouchEvent) {
    if (!this.isDragging || e.touches.length !== 1) return;
    const container = document.querySelector('.projects-container') as HTMLElement;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - this.startX) * 2;
    container.scrollLeft = this.scrollLeft - walk;
  }

  private stopDragging() {
    this.isDragging = false;
    const container = document.querySelector('.projects-container') as HTMLElement;
    container.style.cursor = 'grab';
    container.style.removeProperty('user-select');

    // Snap to nearest card
    const scrollLeft = container.scrollLeft;
    const nearestCard = Math.round(scrollLeft / this.cardWidth);
    this.goToSlide(nearestCard);
  }

  slidePrev() {
    if (this.currentIndex > 0) {
      this.goToSlide(this.currentIndex - 1);
    }
  }

  slideNext() {
    if (this.currentIndex < this.totalCards - 1) {
      this.goToSlide(this.currentIndex + 1);
    }
  }

  goToSlide(index: number) {
    this.currentIndex = Math.max(0, Math.min(index, this.totalCards - 1));
    const container = document.querySelector('.projects-container') as HTMLElement;
    container.scrollTo({
      left: this.currentIndex * this.cardWidth,
      behavior: 'smooth'
    });
  }
}
