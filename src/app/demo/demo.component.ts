import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <h1>Current Count in Demo Child : {{ Count }}</h1>
  <button (click)="increment()">Increment in Demo Child</button>
  `
})
export class DemoComponent implements OnInit{
  
  @Input() Count : number = 0;

  @Output() CountChange = new EventEmitter<number>( );

  constructor(){}

  ngOnInit(): void {
   
  }

  increment(){
    this.Count += 1;
  }

}
