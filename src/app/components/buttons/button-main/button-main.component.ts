import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-main',
  templateUrl: './button-main.component.html',
  styleUrl: './button-main.component.css'
})
export class ButtonMainComponent implements OnInit{

  @Input() buttonText: string = 'Default Text';
  @Output() buttonClick = new EventEmitter<void>();
  constructor(){}

  ngOnInit(): void {
    
  }
  clickButton() {
    this.buttonClick.emit(); // Emitir el evento cuando se haga clic en el botón
  }
}
