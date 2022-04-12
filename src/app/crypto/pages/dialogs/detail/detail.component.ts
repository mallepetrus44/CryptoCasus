import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CryptoService } from 'src/app/crypto/service/crypto.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  currentCrypto: any;
  id!: number;

  constructor( @Inject(MAT_DIALOG_DATA) public data: number, private cryptoService: CryptoService, private router: Router) {
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

  ngOnDestroy(){
    this.router.navigateByUrl('/cryptos');
  }

  // updateCrypto(): void {
  //   this.cryptoService.update(this.currentCrypto.id, this.currentCrypto)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.message = 'The crypto was updated!';
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // deleteCrypto(): void {
  //   this.cryptoService.delete(this.currentCrypto.id)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.router.navigate(['/cryptos']);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  //     }
    
}