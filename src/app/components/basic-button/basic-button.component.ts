import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss']
})
export class BasicButtonComponent implements OnInit {
  @Input() insideContent: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
