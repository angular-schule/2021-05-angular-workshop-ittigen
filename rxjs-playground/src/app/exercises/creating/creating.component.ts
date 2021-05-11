import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, Observer } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent implements OnInit {

  logStream$ = new ReplaySubject<string | number>();

  ngOnInit() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // 1. observer<string>
    const observer = {
      next: e => this.log(e),
      error: err => this.log('ERROR: ' + err),
      complete: () => this.log('COMPLETE')
    }

    // 2. observable
    // const observable = of('😎', '😍', '😇');
    const observable = new Observable(obs => {
      obs.next('😎');
      obs.next('🤓');
      // obs.complete();
      obs.error('🤯');
    });

    // 3. subscription
    const subscription = observable.subscribe(observer);
    subscription.unsubscribe();


    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
