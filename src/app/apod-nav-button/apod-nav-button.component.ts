import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-apod-nav-button',
  templateUrl: './apod-nav-button.component.html',
  styleUrls: ['./apod-nav-button.component.scss']
})
export class ApodNavButtonComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  @Input() rArrow: boolean = true;
}
