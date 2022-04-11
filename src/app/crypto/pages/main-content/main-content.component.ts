import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CryptoCurrency } from 'src/app/core/models/cryptocurrency';
import { CryptoService } from '../../service/crypto.service';
import { DetailComponent } from '../dialogs/detail/detail.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  
  cryptos! : Observable<CryptoCurrency[]>;
  // crypto : CryptoCurrency | undefined 

  constructor(private service: CryptoService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log("enter to get list"),
    this.cryptos = this.service.list();
      this.service.list();
  }

  clicked(mycrypto: CryptoCurrency) {
  this.dialog.open(DetailComponent, {data : mycrypto}); 
}
}
