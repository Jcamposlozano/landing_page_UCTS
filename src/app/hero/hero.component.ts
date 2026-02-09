import { Component } from '@angular/core';
import { HERO } from '../data/ai-course-content';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  hero = HERO;
}
