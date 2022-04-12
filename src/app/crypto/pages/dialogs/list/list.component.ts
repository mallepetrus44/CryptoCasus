import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CryptoCurrency } from 'src/app/core/models/cryptocurrency';
import { CryptoService } from 'src/app/crypto/service/crypto.service';
import { CreateComponent } from '../create/create.component';
import { DeleteComponent } from '../delete/delete.component';
import { DetailComponent } from '../detail/detail.component';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private subs = new Subscription();

  displayedColumns: string[] = ['id', 'ticker', 'name', 'numberOfCoins', 'marketCap','action'];
  cryptos: any;

  public dataSource!: MatTableDataSource<CryptoCurrency>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  private dataArray: any;

  constructor(private cryptoService: CryptoService, private dialog: MatDialog) { }

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
    this.dialog.open(CreateComponent)
    .afterClosed()
     .subscribe(() => this.ngOnInit());
  }

  detailsCrypto(id: number) {
    this.dialog.open(DetailComponent, {data : id });
  }

  editCrypto(id: number) {
    this.dialog.open(EditComponent, {data : id })
    .afterClosed()
      .subscribe(() => this.ngOnInit());
  }

  deleteCrypto(id: number) {
    this.dialog.open(DeleteComponent, {data : id })
    .afterClosed()
      .subscribe(() => this.ngOnInit());
  }

  getAllCryptos(): void {
    this.cryptos = this.cryptoService.list();
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}