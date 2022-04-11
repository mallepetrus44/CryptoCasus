import { HttpErrorResponse } from '@angular/common/http';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { DetailComponent } from 'src/app/crypto/pages/dialogs/detail/detail.component';
import { CryptoService } from 'src/app/crypto/service/crypto.service';
import { CryptoCurrency } from '../../models/cryptocurrency';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  
  private subs = new Subscription();

  displayedColumns: string[] = ['id', 'ticker', 'name', 'numberOfCoins', 'marketCap','action'];
  cryptos: any;

  public dataSource!: MatTableDataSource<CryptoCurrency>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  private dataArray: any;

  constructor(private cryptoService: CryptoService, private _snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit() {
    this.subs.add(this.cryptoService.list()
      .subscribe((res) => {
        console.log(res);
        this.dataArray = res;
        this.dataSource = new MatTableDataSource<CryptoCurrency>(this.dataArray);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        }));
  }

  newCrypto(){

  }

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

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  public openRecord(id: number, name: string): void {
    this._snackBar.open(`Record ${id} ${name} `, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });    
  }

  // public deleteRecord(id: number, name: string): void {
  //   this._snackBar.open(`Record ${id} ${name} `, 'Close', {
  //     horizontalPosition: 'center',
  //     verticalPosition: 'top',
  //   });    
  // }
}