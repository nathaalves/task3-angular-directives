import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isVisible = true;
  buttonClicks: string[] = [];

  setParagraphVisibility() {
    this.isVisible = !this.isVisible;
    this.buttonClicks.push('Clicked');
  }

  getBackgroundColor(index: number) {
    return index >= 4 ? 'blue' : 'transparent';
  }

  getClass(index: number) {
    return index >= 4;
  }
}
