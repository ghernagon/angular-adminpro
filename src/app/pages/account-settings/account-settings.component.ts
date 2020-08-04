import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  
  themeElement = document.querySelector('#theme');
  availableThemes;

  constructor() { }

  ngOnInit() {
    this.availableThemes = document.querySelectorAll('.selector');
    this.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    // Vanilla JS
    const themeUrl = `./assets/css/colors/${ theme }.css`;
    this.themeElement.setAttribute('href', themeUrl);

    localStorage.setItem('theme', themeUrl);

    this.checkCurrentTheme();
  }

  private checkCurrentTheme() {
    this.availableThemes.forEach( e => {
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
