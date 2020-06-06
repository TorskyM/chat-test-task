import { Injectable } from '@angular/core';

import { IChat } from '../interfaces/chat.interface';
import { ChatFacade } from '../store/chat/chat.facade';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor( public chatFacade: ChatFacade) { }

  public currentChat: IChat;

  public shareChatData(chat: IChat): void {
    this.chatFacade.setCurrentChat(chat);
  }

  public getChatData(): IChat {
    this.chatFacade.getChat();

    this.chatFacade.currentChat$
      .subscribe(data => this.currentChat = data.chat);

    return this.currentChat;
  }
}
