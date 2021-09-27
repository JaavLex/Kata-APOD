import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'kataapod';
  appTitleContent: string = "APOD Navigator / Browser";
  todayDate: Date = new Date();
  selectedDateUnformatted: Date = this.todayDate;
  selectedDate: string = "";

  formatDate(date: Date) {
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
  
  previousDay() {
    this.selectedDateUnformatted.setDate(this.selectedDateUnformatted.getDate() - 1)
    this.selectedDate = this.formatDate(this.selectedDateUnformatted);
  }

  nextDay() {
    this.selectedDateUnformatted.setDate(this.selectedDateUnformatted.getDate() + 1)
    this.selectedDate = this.formatDate(this.selectedDateUnformatted);
  }
}
