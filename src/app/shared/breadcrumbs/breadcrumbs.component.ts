import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnDestroy {

  title: string;
  titleSubs$: Subscription;

  constructor( private router: Router ) {
    this.titleSubs$ = this.getUrlParams().subscribe(({ title }) => { // Destructuring, this is the same as data.title
      this.title = title;
      document.title = `Adminpro - ${title}`;
    });
  }

  private getUrlParams() {
    return this.router.events
      .pipe(
        filter(evt => evt instanceof ActivationEnd),
        filter((evt: ActivationEnd) => evt.snapshot.firstChild === null),
        map((evt: ActivationEnd) => evt.snapshot.data)
      )
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

}
