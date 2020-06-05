import { Injectable } from '@angular/core';

import { IChat } from '../interfaces/chat.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public chatData: IChat = {
    userName: 'Someone',
    avatarUrl: '../../assets/images/default-profile.png',
    isOnline: false,
    history: []
  };

  public shareChatData(chatData: IChat): void {
    this.chatData = chatData;
  }

  public chatObservable = Observable.create((observer: any) => {
    try {
      observer.next(this.chatData)
    } catch (err) {
      observer.error(err)
    }
  })
}
