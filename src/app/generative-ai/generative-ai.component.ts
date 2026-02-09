import { Component } from '@angular/core';
import { GENERATIVE_AI } from '../data/ai-course-content';

@Component({
  selector: 'app-generative-ai',
  standalone: true,
  imports: [],
  templateUrl: './generative-ai.component.html',
  styleUrl: './generative-ai.component.css',
})
export class GenerativeAiComponent {
  content = GENERATIVE_AI;
}
