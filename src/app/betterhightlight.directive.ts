import {
  Directive,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterhightlight]',
})
export class BetterhightlightDirective {
  constructor() {}

  @Input() appBetterhightlight = '';

  // Set the property names to change background color and border
  @HostBinding('style.backgroundColor') background: string = 'yellow';
  @HostBinding('style.border') border: string = 'none';

  // Change the color of the input while mouse enter and mouse lave for the background
  @HostListener('mouseenter') mouseenter() {
    this.background = 'pink';
    this.border = 'red 2px solid';
  }

  @HostListener('mouseleave') mouseleave() {
    this.background = 'transparent';
    this.border = 'none';
  }
}
