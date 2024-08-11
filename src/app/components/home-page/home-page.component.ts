import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { Account, Accounts } from '../../models/account-status.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  userData!: Account;
  shops!: Accounts;
  stars:number=0;

  constructor(private accountsService: AccountsService){}

  ngOnInit(): void {
    this.accountsService.getAllUserDataShops().subscribe({ 
      next: (data) => {
        console.log(data);
        this.shops = data;
        this.shops.dataShops.forEach(shop => {
          var califications=shop.seller.seller_reputation.level_id;
          
        });
      },
      error: (error) => {
        console.error('Error fetching data', error);
      }
    }
    );
  }

  getCalification(str: string): number{
    let i = 0;
    while (i < str.length && !isNaN(parseInt(str[i], 10))) {
      i++;
    }
    return parseInt(str.substring(0, i), 10);
  }

}
