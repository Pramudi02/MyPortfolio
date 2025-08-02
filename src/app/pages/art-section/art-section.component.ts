import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';

interface Artwork {
  image: string;
  id: number;
  category: string;
}

@Component({
  selector: 'app-art-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './art-section.component.html',
  styleUrls: ['./art-section.component.css']
})
export class ArtSectionComponent implements OnInit {
  @ViewChild('artworkContainer', { static: false }) artworkContainer!: ElementRef;
  artworkList: Artwork[] = [];
  currentIndex = 0;
  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  ngOnInit() {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: false,
      offset: 100,
      easing: 'ease-in-out',
      anchorPlacement: 'top-bottom'
    });
    this.populateArtworkList();
  }

  slidePrev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scrollToCurrentSlide();
    }
  }

  slideNext() {
    if (this.currentIndex < this.artworkList.length - 1) {
      this.currentIndex++;
      this.scrollToCurrentSlide();
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.scrollToCurrentSlide();
  }

  scrollToCurrentSlide() {
    if (this.artworkContainer) {
      const cardWidth = 320; // 300px card + 20px margin
      const scrollPosition = this.currentIndex * cardWidth;
      this.artworkContainer.nativeElement.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }

  startDragging(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.pageX - (event.target as HTMLElement).offsetLeft;
    this.scrollLeft = (event.target as HTMLElement).scrollLeft;
  }

  onDrag(event: MouseEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = event.pageX - (event.target as HTMLElement).offsetLeft;
    const walk = (x - this.startX) * 2;
    (event.target as HTMLElement).scrollLeft = this.scrollLeft - walk;
  }

  stopDragging() {
    this.isDragging = false;
  }

  onScroll() {
    if (this.artworkContainer) {
      const scrollLeft = this.artworkContainer.nativeElement.scrollLeft;
      const cardWidth = 320; // 300px card + 20px margin
      this.currentIndex = Math.round(scrollLeft / cardWidth);
    }
  }

  populateArtworkList(): void {
    // Charcoal Portraits (1-5)
    for (let i = 1; i <= 5; i++) {
      const extension = (i === 4) ? 'png' : 'jpg';
      this.artworkList.push({
        image: `assets/art/${i}.${extension}`,
        id: i,
        category: 'Charcoal Portraits'
      });
    }
    
    // Paintings (6-10)
    for (let i = 6; i <= 10; i++) {
      const extension = (i === 13) ? 'png' : 'jpg';
      this.artworkList.push({
        image: `assets/art/${i}.${extension}`,
        id: i,
        category: 'Paintings'
      });
    }
    
    // Digital Creations (11-14)
    for (let i = 11; i <= 14; i++) {
      const extension = (i === 13) ? 'png' : 'jpg';
      this.artworkList.push({
        image: `assets/art/${i}.${extension}`,
        id: i,
        category: 'Digital Creations'
      });
    }
    
    console.log('Artwork list:', this.artworkList); // Debug log
  }
}
