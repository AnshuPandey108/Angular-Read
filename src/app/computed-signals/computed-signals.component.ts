import { Component,signal ,computed} from '@angular/core';

@Component({
  selector: 'app-computed-signals',
  imports: [],
  templateUrl: './computed-signals.component.html',
  styleUrl: './computed-signals.component.css'
})
export class ComputedSignalsComponent {
    x = signal(10);
    y = signal(20);
    z=computed(() => this.x() + this.y());


  showValue(){
    console.log(this.z());
    console.log(this.z());
  }
  updateX(){
  this.x.set(this.x() + 1);

  }
}
