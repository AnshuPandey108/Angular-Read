import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  imports: [],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
  color: any = 0;

  setColor(event: any): void {
    this.color = event.target.value;
  }

}

