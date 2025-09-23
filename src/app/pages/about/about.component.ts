import { Component } from '@angular/core';
import { TypingTextComponent } from '../typing-text/typing-text.component';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [TypingTextComponent],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent {

}

