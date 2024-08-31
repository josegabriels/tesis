import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-advertising',
  templateUrl: './table-advertising.component.html',
  styleUrl: './table-advertising.component.css'
})
export class TableAdvertisingComponent implements OnInit{
  @Input() tablaPublicidadData:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
