import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as gVar from '../common/global.variables';

@Component({
  selector: 'app-apod-container',
  templateUrl: './apod-container.component.html',
  styleUrls: ['./apod-container.component.scss']
})
export class ApodContainerComponent implements OnInit {
  apodCopyright: string = "";
  apodExplanation: string = "";
  apodMedia: string = "";
  apodMediaType: string = "";
  apodTitle: string = "";
  @Input() apiDate: string = "";
  
  constructor(private http: HttpClient) { }

  apiRequest() {
    this.http.get<any>(`${gVar.apiUrl}&date=${this.apiDate}`).subscribe(data => {
      data.copyright && (this.apodCopyright = data.copyright);
      this.apodExplanation = data.explanation;
      this.apodMedia = data.url;
      this.apodMediaType = data.media_type;
      this.apodTitle = `${data.date}: ${data.title}`;
    })
  }

  ngOnInit(): void {
    this.apiRequest();
  }

  ngOnChanges(): void {
    this.apiRequest();
  }
}
