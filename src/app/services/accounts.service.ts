import { Injectable } from '@angular/core';
import { Accounts, Account } from '../models/account-status.model';
import { forkJoin, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private userShops = [
    { nickNameShop: 'dehuka' },
    { nickNameShop: 'techiq' },
    { nickNameShop: 'TECNOENLINEA.COM.AR' }
  ];
  private apiUrl = 'https://api.mercadolibre.com/sites/MLA/search?nickname=';
  private token = 'APP_USR-714919120455516-080922-0c86b25b22d2960dcce5d5c15986d8a6-162555727';

  constructor(private http: HttpClient) { }

  getAllUserDataShops(): Observable<Accounts> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    const requests = this.userShops.map(shop => {
      const url = `${this.apiUrl}${shop.nickNameShop}`;
      return this.http.get<Account>(url, { headers });
    });

    return forkJoin(requests).pipe(
      map(responses => ({ dataShops: responses }))
    );
  }

  getUserData(nickname:string): Observable<Account> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get<Account>(`${this.apiUrl}${nickname}`, { headers });
  }
  
}
