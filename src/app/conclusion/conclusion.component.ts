import { Component } from '@angular/core';
import { CONCLUSION } from '../data/ai-course-content';

@Component({
  selector: 'app-conclusion',
  standalone: true,
  imports: [],
  templateUrl: './conclusion.component.html',
  styleUrl: './conclusion.component.css',
})
export class ConclusionComponent {
  content = CONCLUSION;
}
