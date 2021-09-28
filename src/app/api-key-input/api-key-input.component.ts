import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-api-key-input',
  templateUrl: './api-key-input.component.html',
  styleUrls: ['./api-key-input.component.scss']
})
export class ApiKeyInputComponent implements OnInit {

  @Output() apiKey = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.apiKey.emit((document.getElementById("apiField") as HTMLInputElement).value.toString());
  }
}
