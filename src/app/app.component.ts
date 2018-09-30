import { Component } from '@angular/core';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-expertus-web';

  isDataLoaded: boolean = false;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.loadData();
    this.isDataLoaded = true;
  }

  loadData() {
    this.apiService.getMessage("en").subscribe(data => {
      console.log(data.value);
      this.title = data.value;
    }, err => {
      console.log(err);
      return false;
    });
  }
}
