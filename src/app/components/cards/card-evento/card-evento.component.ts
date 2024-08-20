import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-evento',
  templateUrl: './card-evento.component.html',
  styleUrl: './card-evento.component.css'
})
export class CardEventoComponent {
  @Input() urlImagen!:string;
  @Input() nombreEvento!:string;
}
