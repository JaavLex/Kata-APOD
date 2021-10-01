import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY: string | null | undefined = null;
  API_URL: string | null | undefined = null;

  constructor() { }

  apiKeyManager(managerRequest: 'get' | 'set', apiKey?: string | null): void | string | null {
    switch(managerRequest) {
      case 'get':
        return this.API_KEY
      case 'set':
        if (apiKey)
          this.API_KEY = apiKey
        else
          throw new Error('ERROR: apiKey is empty or null, you must specify it')
        break;
      default:
        throw new Error('ERROR: Type of request is unknown')
    }
  }

  apiUrlManager(managerRequest: 'get' | 'set', apiUrl?: string | null): void | string | null {
    switch(managerRequest) {
      case 'get':
        return this.API_URL
      case 'set':
        if (apiUrl)
          this.API_URL = apiUrl
        else
          throw new Error('ERROR: apiUrl is empty or null, you must specify it')
        break;
      default:
        throw new Error('ERROR: Type of request is unknown')
    }
  }

  async getApiData(apiDate: string): Promise<any> {
    if (this.API_KEY) {
      return await fetch(`${this.API_URL}?api_key=${this.API_KEY}&date=${apiDate}`)
        .then(data => {return data.json()})
    } else {
      throw new Error(`ERROR: You MUST have set an api key with 'setApiKey()' before getting data`)
    }
  }
}
