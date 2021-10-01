import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-apod-article',
  templateUrl: './apod-article.component.html',
  styleUrls: ['./apod-article.component.scss']
})
export class ApodArticleComponent implements OnInit {
  apodData: any = null;
  apodCopyright: string = "";
  apodExplanation: string = "";
  apodMedia: string = "";
  apodMediaType: string = "";
  apodTitle: string = "";
  apodDate: string = "";
  @Input() apiService: ApiService = new ApiService();
  @Input() apiDate: string = "";

  constructor(private http: HttpClient) { }

  async apiDataSet(): Promise<any> {
    console.log(await this.apiService.getApiData(this.apodDate))
    this.apodData = await this.apiService.getApiData(this.apodDate);
    //return this.apiService.getApiData(this.apodDate);
    // this.http.get<any>(`https://api.nasa.gov/planetary/apod?api_key=${localStorage.getItem('jaavlex-apod-api-key')}&date=${this.apiDate}`).subscribe(data => {
    //   data.copyright && (this.apodCopyright = data.copyright);
    //   this.apodExplanation = data.explanation;
    //   this.apodMedia = data.url;
    //   this.apodMediaType = data.media_type;
    //   this.apodTitle = data.title;
    //   this.apodDate = data.date;
    // })
  }
  
  ngOnInit(): void {
    this.apiService.apiKeyManager('set', localStorage.getItem('jaavlex-apod-api-key'))
    //alert(this.apiService.apiKeyManager('get'))
    this.apiDataSet();
  }

  ngOnChanges(): void {
    this.apiDataSet();
  }
}
