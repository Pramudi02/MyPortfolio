import { Component } from '@angular/core';
import { TypingTextComponent } from '../typing-text/typing-text.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { EducationComponent } from '../education/education.component';

@Component({
    selector: 'app-homepage',
    standalone: true,
    imports: [
        TypingTextComponent,
        AboutComponent,
        SkillsComponent,
        ProjectsComponent,
        ContactComponent,
        EducationComponent
    ],
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}