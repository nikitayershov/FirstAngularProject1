import {Component, Input, OnInit} from '@angular/core'
import {Card} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: "./card.component.html",
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit  {



  title = 'My Card Title'
  text = 'My Sample Text'

  cardDate:Date =new Date()

  textColor= 'black'

  ngOnInit() {}

  changeTitle () {
    this.title = "New Card Title"
  }

  inputHandler (value: any) {
  // const value = event.target.value
    this.title = value
  }

}
