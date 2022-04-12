import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { CryptoCurrency } from 'src/app/core/models/cryptocurrency';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  apiUrl: string = 'http://localhost:8080/api/currencies';
  
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private httpClient: HttpClient) { }

  // Show lists of item
  list(): Observable<any> {
    return this.httpClient.get(this.apiUrl).pipe(
      catchError(this.handleError)
    );
    
  }

  // Create new item
  getItem(id: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Edit/ Update 
  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Delete
  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Search By Name
  filterByTitle(title: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?title_like=${title}`).pipe(
      catchError(this.handleError)
    );
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

}


//   private _cryptos: BehaviorSubject<CryptoCurrency[]>;
  
//   private dataStore:{
//     cryptos: CryptoCurrency[]
//   }

//   constructor(private http: HttpClient) { 
//     this.dataStore = { cryptos: [] };
//     this._cryptos = new BehaviorSubject<CryptoCurrency[]>([]);
//   }

//   get cryptos(): Observable<CryptoCurrency[]>{
//     return this._cryptos.asObservable();
//   }

//   cryptoById(id:number) {
//     return this.dataStore.cryptos.find(c => c.id == id);
//   }

//   loadAll() {
//     const apiUrl = 'http://localhost:8080/api/currencies';

//     return this.http.get<CryptoCurrency[]>(apiUrl)
//     .subscribe(data => {
//       this.dataStore.cryptos = data;
//       this._cryptos.next(Object.assign({},this.dataStore).cryptos)
//     }, error => {
//       console.log("Failed to fetch posts");
//     });
//   }
// }
