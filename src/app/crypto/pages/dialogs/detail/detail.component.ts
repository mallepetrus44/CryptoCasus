import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CryptoService } from 'src/app/crypto/service/crypto.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

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
}