import { Component } from '@angular/core';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  langue = 'en';

  isDataLoaded: boolean = false;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.loadData();
    this.isDataLoaded = true;
  }

  loadData() {
    this.langue = this.apiService.getRandomLanguage();
    this.apiService.getMessage(this.langue).subscribe(data => {
      console.log(data.value);
      this.title = data.value;
    }, err => {
      console.log(err);
      return false;
    });
  }
}
