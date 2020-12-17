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
  rate= 0.78697;

  convert(): Number{
    return this.amount * this.rate;
  }
  constructor(private Service: ExchangeService) {
    this.Service.getRates(this.from).subscribe(response=>{
      console.log(response)
    })
   }

  ngOnInit(): void {
  }

}
