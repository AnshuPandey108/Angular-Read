import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { EventComponent } from './event/event.component';
import { InputComponent } from './input/input.component';
import { StyleComponent } from './style/style.component';
import { IfElseComponent } from './if-else/if-else.component';
import { SwitchComponent } from './switch/switch.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, EventComponent, InputComponent, StyleComponent, IfElseComponent, SwitchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
