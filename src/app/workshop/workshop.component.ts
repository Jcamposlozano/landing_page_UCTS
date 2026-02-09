import { Component } from '@angular/core';

@Component({
  selector: 'app-workshop',
  standalone: true,
  imports: [],
  templateUrl: './workshop.component.html',
  styleUrl: './workshop.component.css',
})
export class WorkshopComponent {
  readonly colabUrl = 'https://colab.research.google.com/drive/1Tn6WH5urkyprzpBQ4vgf9Q5Kd7JGBVmc?usp=sharing';
}
