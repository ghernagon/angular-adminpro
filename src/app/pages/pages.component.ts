import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  themeElement = document.querySelector('#theme');

  constructor() { }

  ngOnInit() {
    const themeUrl = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.themeElement.setAttribute('href', themeUrl);
  }

}
