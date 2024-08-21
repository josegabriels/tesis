import { Component, Input } from '@angular/core';
import { ComunicationService } from '../../services/comunicationService';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() nickName: string | null= '';
  urlImage:string='';
  constructor(private comunicationService: ComunicationService) {}
  ngOnInit(): void {
    switch(this.nickName){
      case 'DEHUKA':
        this.urlImage='DEHUKA.png';
        break
      case 'TECHIQ':
        this.urlImage='TECHIQ.jpg';
        break
      case 'TECNOENLINEA.COM.AR':
        this.urlImage='TECNOENLINEA.PNG'
        break;
    }
  }

  seleccionarOpcion(opcion: string) {
    this.comunicationService.seleccionarOpcion(opcion);
  }
}
