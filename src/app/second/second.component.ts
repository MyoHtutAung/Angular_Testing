import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  ElementArray = [
    { id: 1, value: 'Car' },
    { id: 2, value: 'Train' },
  ];
}
