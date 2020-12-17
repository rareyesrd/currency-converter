import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../../services/exchange.service'

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {


  amount = 1;
  from = 'CAD';
  to = 'USD';
  rates: {[key: string]: number};

  convert(): number {
    return this.amount * this.rates[this.to];
  }

  loadRates(){
    this.service.getRates(this.from).subscribe(res => {
      this.rates = res.rates;
    });
  }

  getAllCurrencies(): string[]{
    return Object.keys(this.rates);
  }
  constructor(private service: ExchangeService) {

  }

  ngOnInit(): void {
    this.loadRates();
  }

}
