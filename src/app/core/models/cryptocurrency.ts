import { CurrencyPipe } from "@angular/common";

export interface CryptoCurrency {
    id: number;
    ticker: string;
    name: string;
    numberOfCoins: number;
    marketCap: number;
}
