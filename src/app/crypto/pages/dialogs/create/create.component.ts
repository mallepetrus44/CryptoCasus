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

  constructor(@Inject(MAT_DIALOG_DATA) public data: number, private cryptoService: CryptoService) { 
    this.id = data;
  }

  ngOnInit(): void { 
    if(!this.id==null){
      this.getCrypto(this.id);
    }
  }

  getCrypto(id: number | null): void {
    this.cryptoService.getItem(id)
      .subscribe(
        (crypto: null) => {
          this.currentCrypto = crypto;
          console.log(crypto);
        },
        (error: any) => {
          console.log(error);
        });
  }

  // Add New
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

  // Reset on adding new
  newCrypto(): void {
    this.isCryptoAdded = false;
    this.crypto = {
      ticker: '',
      name: '',
      numberOfCoins: 0,
      marketCap: 0
    };
  }

}