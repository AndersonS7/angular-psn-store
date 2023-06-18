import { Component, Input, OnInit } from '@angular/core';
import gamesJSON from '../../../assets/data/games.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  games: any
  constructor() { }

  ngOnInit(): void {
    this.games = gamesJSON.games
  }

}
