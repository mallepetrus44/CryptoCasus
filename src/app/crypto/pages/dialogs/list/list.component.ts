import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CryptoCurrency } from 'src/app/core/models/cryptocurrency';
import { CryptoService } from 'src/app/crypto/service/crypto.service';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cryptos: any;
  currentCrypto:any;
  currentIndex = -1;
  searchTitle = '';

  constructor( private dialog: MatDialog, private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.getAllCryptos();
  }

  // Get list
  getAllCryptos(): void {
    this.cryptoService.list()
      .subscribe(
        (cryptos: any) => {
          this.cryptos = cryptos;
        },
        (error: any) => {
          console.log(error);
        });
  }

  // Delete action
  deleteCrypto(id:number){
    this.cryptoService.delete(id)
    .subscribe(
      response => {
        this.getAllCryptos();
      },
      error => {
        console.log(error);
      });
  }

  // Search items
  searchByTitle(): void {
    this.cryptoService.filterByTitle(this.searchTitle)
      .subscribe(
        cryptos => {
          this.cryptos = cryptos;
        },
        error => {
          console.log(error);
        });
  }

  clicked(mycrypto: CryptoCurrency) {
    this.dialog.open(DetailComponent, {data : mycrypto}); 
  }
}
