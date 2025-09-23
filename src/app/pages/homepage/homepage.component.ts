import { Component, HostListener } from '@angular/core';
import { TypingTextComponent } from '../typing-text/typing-text.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { EducationComponent } from '../education/education.component';
import { ArtSectionComponent } from '../art-section/art-section.component';

@Component({
    selector: 'app-homepage',
    standalone: true,
    imports: [
        TypingTextComponent,
        AboutComponent,
        SkillsComponent,
        ProjectsComponent,
        ContactComponent,
        EducationComponent,
        ArtSectionComponent
    ],
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  isMenuOpen = false;
  activeSection: string = 'home';
  isVerticalNavOpen = true;

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleVerticalNav() {
    this.isVerticalNavOpen = !this.isVerticalNavOpen;
  }

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = ['home', 'about', 'skills', 'projects', 'education', 'art', 'contact'];
    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  ngOnInit() {
    this.onScroll();
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}