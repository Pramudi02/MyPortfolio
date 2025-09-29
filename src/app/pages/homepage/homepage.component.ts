import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// TypingTextComponent removed from imports as it's not used in the template
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { EducationComponent } from '../education/education.component';
import { ArtSectionComponent } from '../art-section/art-section.component';
import { ProjectService, Project } from '../../services/project.service';
import { HighlightsComponent } from '../highlights/highlights.component';

@Component({
    selector: 'app-homepage',
    standalone: true,
    imports: [
        CommonModule,
        AboutComponent,
        SkillsComponent,
        ProjectsComponent,
        ContactComponent,
        EducationComponent,
        ArtSectionComponent,
        HighlightsComponent
    ],
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  isMenuOpen = false;
  activeSection: string = 'home';
  isVerticalNavOpen = true;
  selectedProject: number | null = null;
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.onScroll();
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
    const sections = ['home', 'about', 'skills', 'projects', 'highlights', 'education', 'art', 'contact'];
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

  // ngOnInit already implemented above to load projects and initialize scroll

  closeMenu(): void {
    this.isMenuOpen = false;
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