import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CryptoService } from 'src/app/crypto/service/crypto.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  currentCrypto: any;
  id!: number;

  constructor( @Inject(MAT_DIALOG_DATA) public data: number, private cryptoService: CryptoService) {
    this.id = data;
     }

  ngOnInit(): void {
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

  yesDelete() {
    this.cryptoService.delete(this.currentCrypto.id)
    .subscribe(
      (crypto: null) => {
        this.currentCrypto = crypto;
        console.log(crypto);
      },
      (error: any) => {
        console.log(error);
      });
  }
}
