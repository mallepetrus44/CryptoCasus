import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/crypto/service/crypto.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  crypto = {
    title: '',
    description: ''
  };
  isCryptoAdded = false;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void { }

  // Add New
  addCrypto(): void {
    const data = {
      title: this.crypto.title,
      description: this.crypto.description
    };
    if (!data.title) {
      alert('Please add title!');
      return;
    }

    this.cryptoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isCryptoAdded = true;
        },
        error => {
          console.log(error);
        });
  }

  // Reset on adding new
  newCrypto(): void {
    this.isCryptoAdded = false;
    this.crypto = {
      title: '',
      description: ''
    };
  }

}