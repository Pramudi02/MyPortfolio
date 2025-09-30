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
    // Charcoal Portraits (1-5) - Sample portrait URLs
    const charcoalPortraits = [
      'https://ik.imagekit.io/pr2222/Portfolio-assets/art/1-2.jpg?updatedAt=1759210284283',
      'https://ik.imagekit.io/pr2222/Portfolio-assets/art/2-2.jpg?updatedAt=1759210284905',
      'https://ik.imagekit.io/pr2222/Portfolio-assets/art/3-2.jpg?updatedAt=1759210285275',
      'https://ik.imagekit.io/pr2222/Portfolio-assets/art/4-2.jpg?updatedAt=1759210284549',
      'https://ik.imagekit.io/pr2222/Portfolio-assets/art/5-2.jpg?updatedAt=1759210284401'
    ];
    
    charcoalPortraits.forEach((url, index) => {
      this.artworkList.push({
        image: url,
        id: index + 1,
        category: 'Charcoal Portraits'
      });
    });
    
    // Paintings (6-10) - Sample painting URLs
    const paintings = [
      'https://ik.imagekit.io/pr2222/Portfolio-assets/art/6.jpg?updatedAt=1759136374642',
      'https://ik.imagekit.io/pr2222/Portfolio-assets/art/7.jpg?updatedAt=1759136374160',
      'https://ik.imagekit.io/pr2222/Portfolio-assets/art/8-2.jpg?updatedAt=1759210662773',
      'https://ik.imagekit.io/pr2222/Portfolio-assets/art/9.jpg?updatedAt=1759136373712',
      'https://ik.imagekit.io/pr2222/Portfolio-assets/art/10.jpg?updatedAt=1759136376075'
    ];
    
    paintings.forEach((url, index) => {
      this.artworkList.push({
        image: url,
        id: index + 6,
        category: 'Paintings'
      });
    });
    
    // Digital Creations (11-16) - Sample digital art URLs
    const digitalCreations = [
      'https://ik.imagekit.io/pr2222/Portfolio-assets/art/11-2.jpg?updatedAt=1759210662633',
      'https://ik.imagekit.io/pr2222/Portfolio-assets/art/12.jpg?updatedAt=1759136374250',
      'https://ik.imagekit.io/pr2222/Portfolio-assets/art/13.png?updatedAt=1759136375967',
      'https://ik.imagekit.io/pr2222/Portfolio-assets/art/14--2.jpg?updatedAt=1759210662475',
      'https://ik.imagekit.io/pr2222/Portfolio-assets/art/15.jpg?updatedAt=1759136375945',
      'https://ik.imagekit.io/pr2222/Portfolio-assets/art/16.jpg?updatedAt=1759136375631'
    ];
    
    digitalCreations.forEach((url, index) => {
      this.artworkList.push({
        image: url,
        id: index + 11,
        category: 'Digital Creations'
      });
    });
    
    console.log('Artwork list:', this.artworkList); // Debug log
  }
}
