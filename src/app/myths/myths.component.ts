import { Component } from '@angular/core';
import { MYTHS } from '../data/ai-course-content';

@Component({
  selector: 'app-myths',
  standalone: true,
  imports: [],
  templateUrl: './myths.component.html',
  styleUrl: './myths.component.css',
})
export class MythsComponent {
  myths = MYTHS;
}
