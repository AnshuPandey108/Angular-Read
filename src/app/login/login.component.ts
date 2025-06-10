import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
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
