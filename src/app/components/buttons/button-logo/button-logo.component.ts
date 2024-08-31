import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-logo',
  templateUrl: './button-logo.component.html',
  styleUrl: './button-logo.component.css'
})
export class ButtonLogoComponent {
  @Output() buttonClick = new EventEmitter<void>();
  constructor() { }
  clickButton(){
    this.buttonClick.emit();
  }
}
