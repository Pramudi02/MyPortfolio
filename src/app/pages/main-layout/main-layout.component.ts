import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [RouterModule, FooterComponent],
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
}