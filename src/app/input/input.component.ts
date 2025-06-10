import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  name: string = '';
  displayname: string = '';
  email:any = '';
  showemail: any = '';
  getName(event: any) {
    this.name = event.target.value;
  }
  displayName() {
   this.displayname = this.name;
  }
  setValue(){
    this.name = 'John Doe';
  }
  getEmail(email: string) {
    console.log('Email:', email);
    this.email = email;
  }
  setEmail(email: string) {
    this.showemail = 'anshu.pandey@avista.com';
  }
}
