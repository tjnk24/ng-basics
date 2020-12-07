import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector:'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {

  @Input() card: Card = {
    title: '',
    text: ''
  }
  @Input() index = 0;

  title = 'My Card Title';
  text = 'My Sample Text';

  cardDate: Date = new Date();

  textColor = 'blue';

  disabled = false;

  imgUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  ngOnInit() {}

  changeTitle() {
    this.card.title = 'Title has been changed';
  }

  changeHandler(value: string) {
    this.title = value;
  }

  getInfo(): string {
    return 'This is my info';
  }
}
