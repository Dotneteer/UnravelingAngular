import { Pipe, PipeTransform } from '@angular/core';

import { GameInfo } from './game-info';

@Pipe({name: 'contentFilter'})
export class ContentFilterPipe implements PipeTransform {
  transform(value: GameInfo[], searchFor: string) : GameInfo[] {
    if (!searchFor) return value;
    searchFor = searchFor.toLowerCase();
    return value.filter(game => 
      game.title.toLowerCase().indexOf(searchFor) >= 0 ||
      game.publisher.toLowerCase().indexOf(searchFor) >= 0 ||
      game.genre.toString().indexOf(searchFor) >= 0 ||
      game.year.toString().indexOf(searchFor) >= 0);
  }
}