import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
