import { Component } from '@angular/core';

import { GameInfo } from './game-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topGames = GameInfo.TopGames;
}