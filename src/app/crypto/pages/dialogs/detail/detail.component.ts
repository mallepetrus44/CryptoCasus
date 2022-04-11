import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptoService } from 'src/app/crypto/service/crypto.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  currentCrypto: any;
  message = '';

  constructor(
    private cryptoService: CryptoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getCrypto(this.route.snapshot.paramMap.get('id'));
  }

  getCrypto(id: string | null): void {
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

  deleteCrypto(): void {
    this.cryptoService.delete(this.currentCrypto.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/cryptos']);
        },
        error => {
          console.log(error);
        });
      }
    
}