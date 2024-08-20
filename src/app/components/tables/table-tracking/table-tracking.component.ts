import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-tracking',
  templateUrl: './table-tracking.component.html',
  styleUrl: './table-tracking.component.css'
})
export class TableTrackingComponent implements OnInit{
  @Input() tablaSeguimientoData!:any[];
  constructor() { }

  ngOnInit(): void {
  }
  filteredItems = this.tablaSeguimientoData;

  onSearch(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredItems = this.tablaSeguimientoData.filter(item => 
      item.fecha.toLowerCase().includes(searchTerm) ||
      item.reputacion.toLowerCase().includes(searchTerm)
    );
  }

  onAdd() {
    // Aquí puedes agregar la lógica para agregar un nuevo seguimiento
    console.log('Agregar seguimiento');
  }
}
