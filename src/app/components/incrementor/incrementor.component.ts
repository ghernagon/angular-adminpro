import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementor',
  templateUrl: './incrementor.component.html',
  styles: []
})
export class IncrementorComponent {

  @Input('value') progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() valueChange = new EventEmitter<number>();

  constructor() { }

  changeProgress(value: number) {
    let newValue = this.progress + value;
    if (newValue >= 0 && newValue <= 100) {
      this.progress = newValue;
      this.valueChange.emit(newValue);
    }
  }

  onChange(value: number) {
    if (value <= 0) {
      this.progress = 0;
    } else if (value >= 100) {
      this.progress = 100;
    } else {
      this.progress = value;
    }

    this.valueChange.emit(this.progress);
  }

}
