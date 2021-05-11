import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { reduce, scan } from 'rxjs/operators';

@Component({
  selector: 'rxw-game-score',
  templateUrl: './game-score.component.html',
})
export class GameScoreComponent {

  score$ = new Subject<number>();

  currentScore$ =  this.score$.pipe(
    scan((acc, item) => acc + item, 0)
  );

  finalScore$ = this.score$.pipe(
    reduce((acc, item) => acc + item, 0)
  );

  finishGame() {
    this.score$.complete();
  }

  addScore(amount: number) {
    this.score$.next(amount);
  }
}
