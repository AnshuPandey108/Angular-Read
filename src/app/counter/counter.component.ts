import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
count = 0;
  handleCounter(action: string) {
    switch (action) {
      case 'increment':
        this.count++;
        break;
      case 'decrement':
        if (this.count > 0) {
          this.count--;
        }
        break;
      case 'reset':
        this.count = 0;
        break;
    }
  }

}
