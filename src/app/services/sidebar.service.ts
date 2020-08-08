import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: Array<any> = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: '/' },
        { title: 'ProgressBar', url: 'progress' },
        { title: 'Charts', url: 'charts' },
        { title: 'Promises', url: 'promises' },
        { title: 'RxJs', url: 'rxjs' }
      ]
    }
  ]

  constructor() { }
}
