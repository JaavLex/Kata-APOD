import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-apod-desc',
  templateUrl: './apod-desc.component.html',
  styleUrls: ['./apod-desc.component.scss']
})
export class ApodDescComponent implements OnInit {
  @Input() apiDate: string = "";
  @Input() apodExplanation: string = "";

  constructor() { }

  ngOnInit(): void {}
}
