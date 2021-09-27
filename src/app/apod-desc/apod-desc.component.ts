import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as gVar from '../common/global.variables';

@Component({
  selector: 'app-apod-desc',
  templateUrl: './apod-desc.component.html',
  styleUrls: ['./apod-desc.component.scss']
})
export class ApodDescComponent implements OnInit {
  apodExplanation: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(gVar.apiUrl).subscribe(data => {
        this.apodExplanation = data.explanation;
    })
  }

}
