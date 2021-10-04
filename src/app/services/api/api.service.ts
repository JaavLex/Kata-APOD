import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY: string | null | undefined = null;
  API_URL: string | null | undefined = null;
  API_PARAMS: {[key: string]: string} | null = null;

  constructor() { }

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

  apiParamsManager(managerRequest: 'get' | 'set', apiParam: string, paramVal?: string | null): void | string | null {
    switch(managerRequest) {
      case 'get':
        if (apiParam) {
          if (this.API_PARAMS)
            try {
              return this.API_PARAMS[apiParam]
            } catch (error) {
              throw new Error('ERROR: This parameter does not exist')
            }
          else 
            throw new Error('ERROR: There is no parameters')
        } else {
          throw new Error('ERROR: apiParam is empty or null, you must specify it/them')
        }
      case 'set':
        if (apiParam && paramVal) {
          this.API_PARAMS === null && (this.API_PARAMS = {});
          this.API_PARAMS[apiParam] = paramVal;
        } else {
          throw new Error('ERROR: apiParam or paramVal is empty or null, you must specify it/them')
        }
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
