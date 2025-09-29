import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var IsoGrid: any; // Declare the IsoGrid class from the external JS

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Initialize the IsoGrid after the view is loaded
    [].slice.call(document.querySelectorAll('.isolayer')).forEach(function(el: any) {
      new IsoGrid(el, {
        type: 'scrollable',
        transform: 'translateX(-15vw) translateY(275px) rotateX(45deg) rotateZ(45deg)',
        stackItemsAnimation: {
          properties: function(pos: number) {
            return {
              translateZ: (pos + 1) * 50,
              rotateZ: Math.floor(Math.random() * 7) - 3 // Random between -3 and 3
            };
          },
          options: function(pos: number, itemstotal: number) {
            return {
              type: (window as any).dynamics.bezier,
              duration: 500,
              points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
            };
          }
        },
        onGridLoaded: function() {
          document.body.classList.add('grid-loaded');
        }
      });
    });
  }
}
