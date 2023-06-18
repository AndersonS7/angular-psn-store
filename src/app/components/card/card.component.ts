import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  gameCover: string = ""
  @Input()
  gameLabel: string = ""
  @Input()
  gameType: string = ""
  @Input()
  gamePrice: string = ""
  @Input()
  gamePriceLabel: string = ""

  //recebendo do componente pai
  @Input()
  gameList: any
  
  @Input()
  indexNum = 0
  
  constructor() {
  }

  ngOnInit(): void {
    this.gameCover = this.gameList[this.indexNum].cover
    this.gameLabel = this.gameList[this.indexNum].label
    this.gameType = this.gameList[this.indexNum].console
    this.gamePrice = 'R$ ' + this.gameList[this.indexNum].price.toString()
    this.gamePriceLabel = this.gameList[this.indexNum].priceLabel
  }
}
