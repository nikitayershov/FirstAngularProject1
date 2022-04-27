import { Component } from '@angular/core';

export interface Card{
  title:string
  text:string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstAngularProject';

  cards: Card [] = [
    {title: 'Card 1', text: 'This is card number one'},
    {title: 'Card 2', text: 'This is card number two'},
    {title: 'Card 3', text: 'This is card number three'},

  ]

  toggle = true
  toggleCards() {
    this.toggle = !this.toggle

  }
}
