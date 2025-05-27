import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-typing-text',
    standalone: true,
    imports: [],
    templateUrl: './typing-text.component.html',
    styleUrl: './typing-text.component.css'
})

export class TypingTextComponent implements OnInit {

  roles: string[] = [
    'an Undergraduate...',
    'a UI & UX Designer...',
    'a Graphic Designer...',
    'a Local Artist...'
  ];

  displayText: string = '';
  currentRoleIndex = 0;
  currentCharIndex = 0;
  isDeleting = false;

  ngOnInit(): void {
    this.typeEffect();
  }

  typeEffect(): void {
    const current = this.roles[this.currentRoleIndex];

    if (this.isDeleting) {
      this.displayText = current.substring(0, this.currentCharIndex--);
    } else {
      this.displayText = current.substring(0, this.currentCharIndex++);
    }

    let typingSpeed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.currentCharIndex === current.length) {
      typingSpeed = 1500;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      typingSpeed = 500;
    }

    setTimeout(() => this.typeEffect(), typingSpeed);
  }
}
