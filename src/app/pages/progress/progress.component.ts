import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  private progress: number = 25;
  private progress2: number = 25;

  constructor(){}
  
  get getProgress() {
    return `${this.progress}%`;
  }

  get getProgress2() {
    return `${this.progress2}%`;
  }

}
