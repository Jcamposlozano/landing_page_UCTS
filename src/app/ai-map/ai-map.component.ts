import { Component } from '@angular/core';
import { AI_MAP_ITEMS } from '../data/ai-course-content';

@Component({
  selector: 'app-ai-map',
  standalone: true,
  imports: [],
  templateUrl: './ai-map.component.html',
  styleUrl: './ai-map.component.css',
})
export class AiMapComponent {
  items = AI_MAP_ITEMS;
}
