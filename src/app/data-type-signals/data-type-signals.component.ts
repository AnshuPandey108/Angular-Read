import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-data-type-signals',
  imports: [],
  templateUrl: './data-type-signals.component.html',
  styleUrl: './data-type-signals.component.css',
})
export class DataTypeSignalsComponent {
  data = signal<string | number>(10);
  data1: WritableSignal<number | string> = signal(30);
  count=signal(10);
  updateSignal() {
    this.data.set('hello');
    this.data1.set('hello1');
    this.count.update((val) => val + 1);
  }
}
