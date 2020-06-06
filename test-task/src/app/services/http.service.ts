import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IJoke } from '../interfaces/joke.interface';
import { URLs } from '../app.enum';
import { IChat } from '../interfaces/chat.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getJoke(): Observable<IJoke> {
    return this.http.get<IJoke>(URLs.JOKE);
  }

  public getChats(): Observable<IChat[]> {
    return this.http.get<IChat[]>(URLs.DATA);
  }
}
