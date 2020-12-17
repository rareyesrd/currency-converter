export interface ExchangeRatesResponse {
  rates: {
    [keyValue: string]: Number;
  };
  base: string;
  date: string;
}
