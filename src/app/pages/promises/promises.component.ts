import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // const promise = new Promise( (resolve, reject) => {
    //   if (false) {
    //     resolve('Hello world');
    //   } else {
    //     reject('Something went wrong');
    //   }
    // });

    // promise.then( (r) => {
    //   console.log(r);
    // }).catch(e => {
    //   console.log(e);
    // });

    // console.log('End of init');

    this.getUsers().then(users => {
      console.log('users', users);
    }).catch(e => {
      console.log('error', e);
    });
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data))
        .catch(e => reject(e));
    });
  }
}
