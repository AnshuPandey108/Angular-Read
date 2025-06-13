import { Component } from '@angular/core';

@Component({
  selector: 'app-forloop',
  imports: [],
  templateUrl: './forloop.component.html',
  styleUrl: './forloop.component.css'
})
export class ForloopComponent {
 users= ['anil', 'sunil', 'ajay', 'rahul', 'suraj', 'suresh', 'ramesh', 'rajesh', 'sanjay', 'santosh'];
 students = [
  { name: 'John', age: 18, grade: 'A',email:"john@example.com"},
  { name: 'Jane', age: 19, grade: 'B', email:"jane@example.com"},
  { name: 'Jim', age: 17, grade: 'C', email:"jim@example.com"}
];
}