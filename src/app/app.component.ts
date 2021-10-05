import { Component } from '@angular/core';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'kataapod';
  appTitleContent: string = "APOD Navigator / Browser";
  isAPIKeyPresent: boolean = false;
  todayDate: Date = new Date();
  selectedDateUnformatted: Date = new Date();
  selectedDate: string = "";
  apiKey: any = localStorage.getItem('jaavlex-apod-api-key');

  constructor(public apiService: ApiService) { 
    this.apiService.apiUrlManager('set', 'https://api.nasa.gov/planetary/apod');
  }

  localStorageChecker(): void {
    localStorage.getItem('jaavlex-apod-api-key') == null ? this.isAPIKeyPresent = false : this.isAPIKeyPresent = true;
  }

  navigatorChecker(): boolean {
    return this.formatDate(this.todayDate) != this.formatDate(this.selectedDateUnformatted);
  }

  ngOnInit(): void {
    this.localStorageChecker();
    this.selectedDate = this.formatDate(this.todayDate);
  }

  ngOnChanges(): void {
    this.localStorageChecker();
  }

  getApiKey(event: any): void {
    localStorage.setItem('jaavlex-apod-api-key', event);
    localStorage.getItem('jaavlex-apod-api-key') == null ? this.isAPIKeyPresent = false : this.isAPIKeyPresent = true;
  }

  removeApiKey(): void {
    localStorage.removeItem('jaavlex-apod-api-key');
    localStorage.getItem('jaavlex-apod-api-key') == null ? this.isAPIKeyPresent = false : this.isAPIKeyPresent = true;
  }

  formatDate(date: Date): string {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  pageNavigator(nbPages: number): void {
    this.selectedDateUnformatted.setDate(this.selectedDateUnformatted.getDate() + nbPages);
    this.selectedDate = this.formatDate(this.selectedDateUnformatted);
  }
  
  previousDay(): void {
    this.pageNavigator(-1);
  }

  nextDay(): void {
    this.navigatorChecker() && this.pageNavigator(1);
  }
}
