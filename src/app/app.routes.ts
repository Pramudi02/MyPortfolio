import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EducationComponent } from './pages/education/education.component';
import { ArtSectionComponent } from './pages/art-section/art-section.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { TestConnectionComponent } from './test-connection.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomepageComponent },
      { path: 'about', component: AboutComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'education', component: EducationComponent },
      { path: 'art', component: ArtSectionComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },
  { path: '**', redirectTo: 'home' },
   { path: 'test-connection', component: TestConnectionComponent}
];