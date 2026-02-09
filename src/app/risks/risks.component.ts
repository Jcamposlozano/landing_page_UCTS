import { Component } from '@angular/core';
import { RISKS } from '../data/ai-course-content';

@Component({
  selector: 'app-risks',
  standalone: true,
  imports: [],
  templateUrl: './risks.component.html',
  styleUrl: './risks.component.css',
})
export class RisksComponent {
  risks = RISKS;
}
