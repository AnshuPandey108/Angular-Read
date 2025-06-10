import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { EventComponent } from './event/event.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, EventComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
