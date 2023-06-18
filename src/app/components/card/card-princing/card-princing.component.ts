import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-princing',
  templateUrl: './card-princing.component.html',
  styleUrls: ['./card-princing.component.css']
})
export class CardPrincingComponent implements OnInit {

  @Input()
  gameType: string = "Digital PS4"
  @Input()
  gamePrice: string = "R$ 399,90"
  @Input()
  gamePriceLabel: string = "Play in Now"
  constructor() { }

  ngOnInit(): void {
  }

}
