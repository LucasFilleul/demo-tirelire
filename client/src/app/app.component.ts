import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sopra-demo';
  menuVisible = false;


  onMenuNotify() {
    this.toogleMenu();
  }

  toogleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}