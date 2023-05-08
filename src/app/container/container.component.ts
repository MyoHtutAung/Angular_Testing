import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-container',
  template:   `
  <h1>Current count with input only : {{count}}</h1>
  `
})
export class ContainerComponent implements OnInit {

  @Input() count: any;

  constructor(
  ){}

  ngOnInit(): void {}

  increment(){
    this.count +=1 ;
  }
}
