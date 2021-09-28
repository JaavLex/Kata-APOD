import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apod-title',
  templateUrl: './apod-title.component.html',
  styleUrls: ['./apod-title.component.scss']
})
export class ApodTitleComponent implements OnInit {
  @Input() apiDate: string = "";
  @Input() apodTitle: string = "";
  @Input() apodDate: string = "";

  constructor() { }

  ngOnInit(): void {}
}
