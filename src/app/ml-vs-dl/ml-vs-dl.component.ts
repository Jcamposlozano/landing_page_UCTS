import { Component } from '@angular/core';
import { ML_VS_DL } from '../data/ai-course-content';

@Component({
  selector: 'app-ml-vs-dl',
  standalone: true,
  imports: [],
  templateUrl: './ml-vs-dl.component.html',
  styleUrl: './ml-vs-dl.component.css',
})
export class MlVsDlComponent {
  content = ML_VS_DL;
}
