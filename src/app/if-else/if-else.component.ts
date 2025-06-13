import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-if-else',
  imports: [FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css',
})
export class IfElseComponent {
  display: boolean = true;
  toggle: boolean = true;
  color: any = 0;

  toggleDisplay(): void {
    this.display = !this.display;
  }
  toggleTwo(): void {
    this.toggle = !this.toggle;
  }
  setColor(event: any): void {
    this.color = event.target.value;
  }
  handleColor(val:number){
    this.color = val;
  }

}
