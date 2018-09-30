import { Component } from '@angular/core';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  language = 'en';

  isDataLoaded: boolean = false;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.loadLanguage();
    this.isDataLoaded = true;
  }

  loadLanguage() {
    if (this.language == 'en') {
      this.language = 'fr';
    } else {
      this.language = 'en'
    }
    this.apiService.getMessage(this.language).subscribe(data => {
      console.log(data.value);
      this.title = data.value;
    }, err => {
      console.log(err);
      return false;
    });
  }

  loadData() {
    //this.language = this.apiService.getRandomLanguage();
    /*this.apiService.getMessage(this.langue).subscribe(data => {
      console.log(data.value);
      this.title = data.value;
    }, err => {
      console.log(err);
      return false;
    });*/
  }
}
