import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FooterComponent } from './pages/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, HomepageComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'my-portfolio';
}
