import { Component } from '@angular/core';
import { WebServiceService } from '../web-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  word: string;
  description: string;
  constructor(private webService: WebServiceService) {}

  ionViewWillEnter() {
    this.webService.getWord().subscribe(
      word => this.word = word);
  }

}
