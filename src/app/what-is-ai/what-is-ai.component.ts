import { Component } from '@angular/core';
import { WHAT_IS_AI } from '../data/ai-course-content';

@Component({
  selector: 'app-what-is-ai',
  standalone: true,
  imports: [],
  templateUrl: './what-is-ai.component.html',
  styleUrl: './what-is-ai.component.css',
})
export class WhatIsAiComponent {
  content = WHAT_IS_AI;
}
