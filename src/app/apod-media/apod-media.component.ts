import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as gVar from '../common/global.variables';

@Component({
  selector: 'app-apod-media',
  templateUrl: './apod-media.component.html',
  styleUrls: ['./apod-media.component.scss']
})
export class ApodMediaComponent implements OnInit {
  @Input() apiDate: string = "";
  @Input() apodMedia: string = "";
  @Input() apodMediaType: string = "";
  isImage: boolean = this.apodMediaType == "image" ? true : false;

  constructor() {}

  ngOnInit(): void {}

  ngOnChange(): void {
    this.isImage = this.apodMediaType == "image" ? true : false;
  }
}
