import { Component } from '@angular/core';
import { TypingTextComponent } from '../typing-text/typing-text.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [TypingTextComponent,AboutComponent,ContactComponent,SkillsComponent,ProjectsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}

