import { Component } from '@angular/core';
import { AGENTS_RAG_FLOWS } from '../data/ai-course-content';

@Component({
  selector: 'app-agents-rag-flows',
  standalone: true,
  imports: [],
  templateUrl: './agents-rag-flows.component.html',
  styleUrl: './agents-rag-flows.component.css',
})
export class AgentsRagFlowsComponent {
  content = AGENTS_RAG_FLOWS;
}
