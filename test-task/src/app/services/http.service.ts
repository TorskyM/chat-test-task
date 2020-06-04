import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IJoke } from '../interfaces/joke.interface';
import { URLs } from '../app.enum';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getJoke(): Observable<IJoke> {
    return this.http.get<IJoke>(URLs.JOKE);
  }
}
