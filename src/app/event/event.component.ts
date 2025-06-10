import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
})
export class EventComponent {
  handleEvent(event: any) {
    console.log('Event called:', event.type);
    if(event.target.value) {
      console.log('Event value:', event.target.value);
    }
  }
}
