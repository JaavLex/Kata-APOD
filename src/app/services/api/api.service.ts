import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY: string | null | undefined = null;
  API_KEY_PARAM: string | null | undefined = null;
  API_URL: string | null | undefined = null;
  API_PARAMS: {[key: string]: string} | null = null;

  constructor() { }

  paramsFormatter(): string | void{
    var formattedParams: string = "";
    if (this.API_PARAMS) {
      var index: number = 0;
      var length: number = Object.entries(this.API_PARAMS).length;
      Object.entries(this.API_PARAMS).forEach(([key, value]) => {
        formattedParams += index == 0 && '&';
        formattedParams += index < length && length > 1 ? `${key}=${value}&` : `${key}=${value}`
        index++;
      }) 
      return formattedParams;
    } else {
      return '';
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

  apiKeyManager(managerRequest: 'get_key' | 'get_param' | 'set', apiKey?: string | null, apiKeyParam?: string | null): void | string | null {
    switch(managerRequest) {
      case 'get_key':
        return this.API_KEY
      case 'get_param':
        return this.API_KEY_PARAM
      case 'set':
        if (apiKey && apiKeyParam) {
          this.API_KEY = apiKey
          this.API_KEY_PARAM = apiKeyParam
        } else {
          throw new Error('ERROR: apiKey or apiKeyParam is empty or null, you must specify it')
        }
        break;
      default:
        throw new Error('ERROR: Type of request is unknown')
    }
  }

  apiParamsManager(managerRequest: 'get' | 'set' | 'update', apiParam: string, paramVal?: string | null): void | string | null {
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
      case 'update':
        if (apiParam && paramVal) {
          if (this.API_PARAMS)
            try {
              this.API_PARAMS[apiParam] = paramVal;
            } catch (error) {
              throw new Error('ERROR: This parameter does not exist')
            }
          else 
            throw new Error('ERROR: There is no parameters')
        } else {
          throw new Error('ERROR: apiParam or paramVal is empty or null, you must specify it/them')
        }
        break;
      default:
        throw new Error('ERROR: Type of request is unknown')
    }
  }

  async getApiData(): Promise<any> {
    if (this.API_KEY) {
      return await fetch(`${this.API_URL}?${this.API_KEY_PARAM}=${this.API_KEY}${this.paramsFormatter()}`)
        .then(data => {return data.json()})
    } else {
      throw new Error(`ERROR: You MUST have set an api key with 'setApiKey()' before getting data`)
    }
  }

  debug(): void {
    console.log('+------------- CURRENT API SERVICE CONFIGURATION DEBUG ----------')
    console.log('| CURRENT API URL: ' + this.API_URL)
    console.log('| CURRENT API KEY: ' + this.API_KEY)
    console.log('| CURRENT API PARAMETERS: ' + this.paramsFormatter())
    console.log('| CURRENT FULL URL: ' + `${this.API_URL}?${this.API_KEY_PARAM}=${this.API_KEY}${this.paramsFormatter()}`)
    console.log('+----------------------------------------------------------------')
  }
}
