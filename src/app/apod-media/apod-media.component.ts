import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-apod-media',
  templateUrl: './apod-media.component.html',
  styleUrls: ['./apod-media.component.scss']
})
export class ApodMediaComponent implements OnInit {
  @Input() apiDate: string = "";
  @Input() apodMedia: string = "";
  @Input() apodMediaType: string = "";

  constructor(private _sanitizer: DomSanitizer) {}

  bypassSecurityURL(url: string) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  ngOnInit(): void {}
}
