import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private themeElement = document.querySelector('#theme');

  constructor() {
    const themeUrl = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.themeElement.setAttribute('href', themeUrl);
  }

  changeTheme(theme: string) {
    // Vanilla JS
    const themeUrl = `./assets/css/colors/${ theme }.css`;
    this.themeElement.setAttribute('href', themeUrl);
    localStorage.setItem('theme', themeUrl);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const availableThemes = document.querySelectorAll('.selector');

    availableThemes.forEach( e => {
      e.classList.remove('working');
      const btnTheme = e.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.themeElement.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        e.classList.add('working');
      }
    });
  }
}
