import { Injectable } from '@angular/core';

import { IChat } from '../interfaces/chat.interface';

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
    console.log(this.chatData);
  }
}
