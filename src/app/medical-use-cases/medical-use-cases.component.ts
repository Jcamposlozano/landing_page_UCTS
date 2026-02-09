import { Component } from '@angular/core';
import { MEDICAL_USE_CASES } from '../data/ai-course-content';

@Component({
  selector: 'app-medical-use-cases',
  standalone: true,
  imports: [],
  templateUrl: './medical-use-cases.component.html',
  styleUrl: './medical-use-cases.component.css',
})
export class MedicalUseCasesComponent {
  cases = MEDICAL_USE_CASES;
}
