import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../../../models/account-status.model';

@Component({
  selector: 'app-card-shop',
  templateUrl: './card-shop.component.html',
  styleUrl: './card-shop.component.css'
})
export class CardShopComponent implements OnInit{

  @Input() infoCard!:Account;
  @Input() calification:number|undefined;

  get starsArray(): number[] {
    return this.calification ? Array(this.calification).fill(0) : [];
  }
  imageName: string = 'zapas';
  constructor(private router: Router){}

  ngOnInit(): void {
    
    switch(this.infoCard.seller.nickname){
      case 'DEHUKA':
        this.imageName='DEHUKA.png';
        break
      case 'TECHIQ':
        this.imageName='TECHIQ.jpg';
        break
      case 'TECNOENLINEA.COM.AR':
        this.imageName='TECNOENLINEA.PNG'
        break;
    }
  }

  viewInfoCard() {
    if (this.infoCard && this.infoCard.seller && this.infoCard.seller.nickname) {
      // Redirige a /infoCardShop/nombreShop
      this.router.navigate([`/infoCardShop/${this.infoCard.seller.nickname}`]);
    }
  }

}
