import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { DpAppAnimations } from './app.animation';

let animationObj = new DpAppAnimations();

let textAnimStates = animationObj.SetTrigger('heroState');

export const AppAnimations = [].concat(textAnimStates);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: AppAnimations
})
export class AppComponent {
  title = 'app';
  animState = 'active';
  toggleState() {
    this.animState = this.animState === 'active' ? 'inactive' : 'active';
  }
}
