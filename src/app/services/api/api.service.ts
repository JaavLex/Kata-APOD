import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY: string | null = "null";

  constructor(private http: HttpClient) { }

  setApiKey(apiKey: string | null) {
    this.API_KEY = apiKey;
  }

  getApiData(date: string): any {
    if (this.API_KEY == "null") {
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${this.API_KEY}&date=${date}`)
        .then(data => {return data})
    } else {
      throw new Error(`You MUST have set an api key with 'setApiKey()' before getting data`)
    }
  }
}
