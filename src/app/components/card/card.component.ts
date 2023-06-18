import { Component, Input, OnInit } from '@angular/core';
import gamesJSON from '../../../assets/data/games.json';

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
  gameType: string = "XPTO | PS4"
  @Input()
  gamePrice: string = ""
  @Input()
  gamePriceLabel: string = "Play in Now"

  games: any

  @Input()
  indexNum = 0

  constructor() {
  }

  ngOnInit(): void {
    if (gamesJSON) {
      this.games = gamesJSON.games
      this.gameCover = gamesJSON.games[this.indexNum].cover
      this.gameLabel = gamesJSON.games[this.indexNum].label
      this.gameType = gamesJSON.games[this.indexNum].console
      this.gamePrice = 'R$ ' + gamesJSON.games[this.indexNum].price.toString()
      this.gamePriceLabel = gamesJSON.games[this.indexNum].priceLabel
    }
  }
}
