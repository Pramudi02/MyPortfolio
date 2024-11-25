import { Component, AfterViewInit } from '@angular/core';
declare var fullpage: any;
import { RouterOutlet } from '@angular/router';
// import { LayoutComponent } from "./pages/layout/layout.component";
// import { LoginComponent } from "./pages/login/login.component";
import { AboutComponent } from "./pages/about/about.component";
// import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './pages/footer/footer.component';
// import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,AboutComponent,ContactComponent,FooterComponent,HomepageComponent,SkillsComponent,ProjectsComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    new fullpage('#fullpage', {
      scrollBar: true,
      responsiveWidth: 400,
      navigation: true,
      navigationTooltips: ['home', 'about', 'portfolio', 'contact'],
      anchors: ['home', 'about', 'portfolio', 'contact'],
      menu: '#myMenu',
      fitToSection: false,
    });
  }
}
