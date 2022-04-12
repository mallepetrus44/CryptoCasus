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
  

}