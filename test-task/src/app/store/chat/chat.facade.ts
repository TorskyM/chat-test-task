import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/app.store';
import { SetCurrentChat, LoadChatData } from '../../store/chat/chat.action';
import { getChatData } from './chat.selector';
import { IChat } from 'src/app/interfaces/chat.interface';

@Injectable({
  providedIn: 'root'
})

export class ChatFacade {
  constructor(private store: Store<IAppState>) { }

  public currentChat$ = this.store.select(getChatData);

  public setCurrentChat(chat: IChat): void {
    this.store.dispatch(new SetCurrentChat(chat));
  }

  public getChat(): void {
    this.store.dispatch(new LoadChatData());
  }
}
