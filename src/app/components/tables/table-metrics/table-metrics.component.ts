import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../../../models/account-status.model';

@Component({
  selector: 'app-table-metrics',
  templateUrl: './table-metrics.component.html',
  styleUrl: './table-metrics.component.css'
})
export class TableMetricsComponent implements OnInit{

  @Input() infoCard!:Account;
  @Input() tablaMetricasData:any[]=[];
  cancelaciones:number=0;
  total:number=0;
  reclamos:number=0;

  constructor(){}

  ngOnInit(): void {
    
  }

  numeroCancelaciones():number{
    return this.infoCard.seller.seller_reputation.transactions.canceled;
  }
  porcentajeCancelaciones():number{
    const percentage = (this.infoCard.seller.seller_reputation.transactions.canceled/this.infoCard.seller.seller_reputation.transactions.total)*100;
    return parseFloat(percentage.toFixed(2));
  }
  numeroReclamos():number{
    return this.infoCard.seller.seller_reputation.metrics.claims.value;
  }
  porcentajeReclamos():number{
    const percentage = (this.infoCard.seller.seller_reputation.metrics.claims.value / this.infoCard.seller.seller_reputation.metrics.sales.completed) * 100;
    return parseFloat(percentage.toFixed(2));
  }

}
