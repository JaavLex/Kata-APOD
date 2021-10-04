import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-apod-article',
  templateUrl: './apod-article.component.html',
  styleUrls: ['./apod-article.component.scss']
})
export class ApodArticleComponent implements OnInit {
  apodData: any = null;
  @Input() apiService: ApiService = new ApiService();
  @Input() apiDate: string = "";

  constructor() { }

  async apiDataSet(): Promise<any> {
    this.apodData = await this.apiService.getApiData(this.apiDate);
  }
  
  ngOnInit(): void {
    this.apiService.apiKeyManager('set', localStorage.getItem('jaavlex-apod-api-key'))
    this.apiDataSet();
  }

  ngOnChanges(): void {
    this.apiDataSet();
  }
}
