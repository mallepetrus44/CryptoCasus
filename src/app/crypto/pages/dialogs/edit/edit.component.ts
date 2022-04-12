import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CryptoService } from 'src/app/crypto/service/crypto.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id:number;
  currentCrypto: any;
  message = '';

  constructor( private cryptoService: CryptoService,  @Inject(MAT_DIALOG_DATA) public data: number,) {
      this.id = data;
  }

  ngOnInit(): void {
    this.message = '';
    this.getCrypto(this.id);
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

  setAvailableStatus(status: any): void {
    const data = {
      ticker: this.currentCrypto.ticker,
      name: this.currentCrypto.name,
      numberOfCoins: this.currentCrypto.numberOfCoins,
      marketCap: this.currentCrypto.marketCap,
      available: status
    };

    this.cryptoService.update(this.currentCrypto.id, data)
      .subscribe(
        response => {
          this.currentCrypto.available = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateCrypto(): void {
    this.cryptoService.update(this.currentCrypto.id, this.currentCrypto)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The crypto was updated!';
        },
        error => {
          console.log(error);
        });
  }

}