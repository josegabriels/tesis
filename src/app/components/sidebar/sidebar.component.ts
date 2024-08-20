import { Component } from '@angular/core';
import { ComunicationService } from '../../services/comunicationService';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private comunicationService: ComunicationService) {}
  ngOnInit(): void {
    
  }

  seleccionarOpcion(opcion: string) {
    this.comunicationService.seleccionarOpcion(opcion);
  }
}
