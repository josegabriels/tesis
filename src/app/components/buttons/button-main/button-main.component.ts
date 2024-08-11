import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-main',
  templateUrl: './button-main.component.html',
  styleUrl: './button-main.component.css'
})
export class ButtonMainComponent implements OnInit{

  @Input() buttonText: string = 'Default Text';

  constructor(){}

  ngOnInit(): void {
    
  }

}
