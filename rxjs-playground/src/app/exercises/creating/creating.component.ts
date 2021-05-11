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

    // 2. observable + 3. subscriber
    // const observable = of('😎', '😍', '😇');
    const observable = new Observable(subscriber => {
      subscriber.next('😎');
      subscriber.error('FEHLER');

      const x = setTimeout(() => subscriber.next('🤓'), 1000);
      const y = setTimeout(() => subscriber.next('👿'), 2000);
      // obs.complete();
      const z = setTimeout(() => { subscriber.error('🤯'), this.log('ZOMBIE CODE!') }, 3000);

      return () => {
        this.log('UNSUBSCRIBE!');
        clearTimeout(x);
        clearTimeout(y);
        clearTimeout(z);
      }
    });

    // 4. subscription
    const subscription = observable.subscribe(observer);
    setTimeout(() => subscription.unsubscribe(), 2500);


    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
