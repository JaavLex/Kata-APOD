import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as gVar from '../common/global.variables';

@Component({
  selector: 'app-apod-title',
  templateUrl: './apod-title.component.html',
  styleUrls: ['./apod-title.component.scss']
})
export class ApodTitleComponent implements OnInit {
  apodTitle: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(gVar.apiUrl).subscribe(data => {
      this.apodTitle = `${data.date}: ${data.title}`;
  })
  }

}
