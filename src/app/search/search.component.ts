import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  CountInputOnly: number = 0;
  CountWithDemo: number = 0;
  B_Color = 'green';

  ngOnInit(): void {}

  incrementInputOnly() {
    this.CountInputOnly += 1;
  }

  decreaseInput() {
    this.CountInputOnly -= 1;
  }

  CountwithDemoEvent() {
    this.CountWithDemo += 1;
  }

  DecreasewithDemoEvent() {
    this.CountWithDemo -= 1;
  }
}
