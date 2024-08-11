import { Component, Input, OnInit } from '@angular/core';
import { Accounts } from '../../models/account-status.model';
import { AccountsService } from '../../services/accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent implements OnInit{

  @Input() isOpen:Boolean = false;

  constructor(private accountsService: AccountsService, private router: Router){}

  nickname:String='';
  shops!:Accounts;

  ngOnInit(): void {
    this.accountsService.getAllUserDataShops().subscribe({ 
      next: (data) => {
        console.log(data);
        this.shops=data;
      },
      error: (error) => {
        console.error('Error fetching data', error);
      }
    }
    );
  }

  viewInfoCard(nickname:String) {
    // Redirige a /infoCardShop/nombreShop
    this.router.navigate([`/infoCardShop/${nickname}`]);
  }

}
