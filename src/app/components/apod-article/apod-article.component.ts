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

  async apiDataSet(mode: 'init' | 'update'): Promise<any> {
    mode === 'update' && this.apiService.apiParamsManager('update', 'date', this.apiDate);
    this.apodData = await this.apiService.getApiData();
  }

  ngOnInit(): void {
    this.apiService.apiKeyManager('set', localStorage.getItem('jaavlex-apod-api-key'))
    this.apiService.apiParamsManager('set', 'date', this.apiDate);
    this.apiDataSet('init');
  }

  ngOnChanges(): void {
    this.apiDataSet('update');
  }
}
