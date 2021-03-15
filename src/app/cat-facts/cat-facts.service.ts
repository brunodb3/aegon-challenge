import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  constructor(
    public httpClient: HttpClient
  ) { }

  facts(limit: number): Observable<any> {
    return this.httpClient.get(`https://catfact.ninja/facts?limit=${JSON.stringify(limit)}`);
  }
}
