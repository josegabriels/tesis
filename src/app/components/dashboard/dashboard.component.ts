import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../../services/accounts.service';
import { Account } from '../../models/account-status.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  infoCard!: Account;
  isCard: Boolean = true;
  parametroLabel1: String = 'Total de ventas';
  parametroLabel2: String = 'Total de ventas con mercado envio';
  parametroLabel3: String = 'Total de ventas concretadas';
  valorParametro1: number = 0;
  valorParametro2: number = 0;
  valorParametro3: number = 0;

  constructor(private route: ActivatedRoute, private accountsService: AccountsService) { }

  ngOnInit(): void {
    // Obtener el parámetro de ruta 'shopName'
    this.route.paramMap.subscribe(params => {
      const shopName = params.get('shopName');
      if (shopName) {
        // Usa el shopName para obtener el objeto completo
        this.accountsService.getUserData(shopName).subscribe(data => {
          this.infoCard = data;
          this.valorParametro1 = this.infoCard.seller.seller_reputation.transactions.total;
          this.valorParametro2 = this.infoCard.seller.seller_reputation.transactions.completed;
          this.valorParametro3 = this.infoCard.seller.seller_reputation.transactions.completed;

          console.log(this.infoCard);
        });
      }
    });
  }

  getCalification(str: string): number{
    let i = 0;
    while (i < str.length && !isNaN(parseInt(str[i], 10))) {
      i++;
    }
    return parseInt(str.substring(0, i), 10);
  }

}
