import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as gVar from '../common/global.variables';

@Component({
  selector: 'app-apod-container',
  templateUrl: './apod-container.component.html',
  styleUrls: ['./apod-container.component.scss']
})
export class ApodContainerComponent implements OnInit {
  apodCopyright: string = "";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(gVar.apiUrl).subscribe(data => {
      data.url && (this.apodCopyright = data.url);
    })
  }

}
