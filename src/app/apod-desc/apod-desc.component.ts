import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apod-desc',
  templateUrl: './apod-desc.component.html',
  styleUrls: ['./apod-desc.component.scss']
})
export class ApodDescComponent implements OnInit {
  apodExplanation: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').subscribe(data => {
        this.apodExplanation = data.explanation;
    })
  }

}
