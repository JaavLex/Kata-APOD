import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as gVar from '../common/global.variables';

@Component({
  selector: 'app-apod-media',
  templateUrl: './apod-media.component.html',
  styleUrls: ['./apod-media.component.scss']
})
export class ApodMediaComponent implements OnInit {
  apodMedia: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(gVar.apiUrl).subscribe(data => {
      this.apodMedia = data.url;
    })
  }
}
