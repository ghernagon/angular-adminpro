import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  intervalSubs: Subscription;

  constructor() {

    // this.createObservable().pipe(
    //   retry()
    // ).subscribe(
    //   val => console.log('Subs', val),
    //   err => console.warn('Error', err),
    //   () => console.info('Obs finished')
    // );

    // this.createInterval().subscribe( (val) => console.log(val) );
    // This is a JS feature, pass arguments to another function without write them explicitly
    this.intervalSubs = this.createInterval().subscribe( console.log );
  }

  ngOnInit() {
  }

  createInterval(): Observable<number> {
    // Is a good practice to add $ suffix to observable names, to recognize it as an Observale
    // return interval(1000)
    //   .pipe(
    //     take(4),
    //     map(v => v++)
    //   );

    return interval(500)
      .pipe(
        take(10),
        map(v => v++),
        filter( v => (v % 2 === 0) ? true : false )
      );
  }

  createObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>( observer => {
      const interval = setInterval( () => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          // An observer should ALWAYS have a complete, otherwise it will keep running forever
          observer.complete();
        }

        if (i == 2) {
          observer.error('i is 2');
        }
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    // The observers should be clean to avoid memory leaks
    this.intervalSubs.unsubscribe();
  }

}
