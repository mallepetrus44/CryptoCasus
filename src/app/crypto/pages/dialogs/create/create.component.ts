import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CryptoService } from 'src/app/crypto/service/crypto.service';

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  id!: number;
  currentCrypto: any;
  crypto = {
    ticker: '',
    name: '',
    numberOfCoins: 0,
    marketCap: 0
  };
  isCryptoAdded = false;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void { }

  addCrypto(): void {
    const data = {
      ticker: this.crypto.ticker,
      name: this.crypto.name,
      numberOfCoins: this.crypto.numberOfCoins,
      marketCap: this.crypto.marketCap
    };
    if (!data.name) {
      alert('Please add name!');
      return;
    }

    this.cryptoService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}