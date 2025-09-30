import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, HomepageComponent, FooterComponent, LoadingScreenComponent, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    title = 'my-portfolio';
    isLoading = true;

    ngOnInit() {
        // Check if this is the first visit
        const hasVisited = sessionStorage.getItem('hasVisited');
        
        if (!hasVisited) {
            // First visit - show full loading screen
            this.showLoadingScreen();
            sessionStorage.setItem('hasVisited', 'true');
        } else {
            // Subsequent visits - shorter loading or no loading
            this.isLoading = false;
        }
    }

    private showLoadingScreen() {
        // Minimum loading time of 2 seconds for UX
        const minLoadTime = 2000;
        const startTime = Date.now();

        // Wait for page to be fully loaded
        if (document.readyState === 'complete') {
            this.hideLoadingAfterDelay(minLoadTime, startTime);
        } else {
            window.addEventListener('load', () => {
                this.hideLoadingAfterDelay(minLoadTime, startTime);
            });
        }
    }

    private hideLoadingAfterDelay(minLoadTime: number, startTime: number) {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadTime - elapsedTime);

        setTimeout(() => {
            this.isLoading = false;
        }, remainingTime);
    }
}
