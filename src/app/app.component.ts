import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { WhatIsAiComponent } from './what-is-ai/what-is-ai.component';
import { AiMapComponent } from './ai-map/ai-map.component';
import { MlVsDlComponent } from './ml-vs-dl/ml-vs-dl.component';
import { GenerativeAiComponent } from './generative-ai/generative-ai.component';
import { AgentsRagFlowsComponent } from './agents-rag-flows/agents-rag-flows.component';
import { MedicalUseCasesComponent } from './medical-use-cases/medical-use-cases.component';
import { MythsComponent } from './myths/myths.component';
import { RisksComponent } from './risks/risks.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { WorkshopComponent } from './workshop/workshop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    WhatIsAiComponent,
    AiMapComponent,
    MlVsDlComponent,
    GenerativeAiComponent,
    AgentsRagFlowsComponent,
    MedicalUseCasesComponent,
    MythsComponent,
    RisksComponent,
    ConclusionComponent,
    WorkshopComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  navLinks = [
    { label: '¿Qué es IA?', href: '#what-is-ai' },
    { label: 'Mapa de la IA', href: '#ai-map' },
    { label: 'ML vs DL', href: '#ml-vs-dl' },
    { label: 'IA generativa', href: '#generative-ai' },
    { label: 'Agentes y RAG', href: '#agents-rag-flows' },
    { label: 'Casos médicos', href: '#medical-use-cases' },
    { label: 'Mitos', href: '#myths' },
    { label: 'Riesgos', href: '#risks' },
    { label: 'Cierre', href: '#conclusion' },
    { label: 'Taller práctico', href: '#taller-practico' },
  ];
}
