import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-apod-container',
  templateUrl: './apod-container.component.html',
  styleUrls: ['./apod-container.component.scss']
})
export class ApodContainerComponent implements OnInit {
  @Input() apiDate: string = "";
  @Input() isAPIKeyPresent: boolean = false;
  @Output() apiKey = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {}

  transmitAPIKey(event: string): void {
    this.apiKey.emit(event)
  }
}
