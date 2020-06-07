import {
  Component, OnInit, ViewChildren,
  QueryList, ElementRef, OnDestroy
} from '@angular/core';

import { Subscription } from 'rxjs';

import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { IMessage } from 'src/app/interfaces/message.interface';
import { IChat } from 'src/app/interfaces/chat.interface';
import { URLs } from 'src/app/app.enum';
import { HttpService } from 'src/app/services/http.service';
import { ChatFacade } from 'src/app/store/chat/chat.facade';

@AutoUnsubscribe()
@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.html',
  styleUrls: ['./chat-messages.scss']
})
export class ChatMessagesComponent implements OnInit, OnDestroy {

  constructor(
    private readonly httpService: HttpService,
    private readonly chatFacade: ChatFacade) { }

  @ViewChildren('msgWrapper') messageRefsList: QueryList<ElementRef>;

  public currentChat: IChat;
  public chatSub: Subscription;
  public messages: IMessage[];
  public sendImageUrl = URLs.SEND_ICON;
  public newMessageText: string = '';
  public messagesSub: Subscription;

  public ngOnInit(): void {
    this.chatSub = this.chatFacade.currentChat$
  .subscribe(data => {
    this.currentChat = data.chat;
    this.messages = [...data.chat.history];
  });
  }

  public onKeyDown(event: any): void {
    if (event.key === 'Enter') {
      this.sendMessage();
    };
  }

  public sendMessage(): void {
    if (this.newMessageText.length) {
      this.messages.push({
        content: this.newMessageText,
        createdAt: new Date().toString(),
        isOwnMessage: true,
        isTimeStamped: true
      });

      this.newMessageText = '';

      this.httpService.getJoke().subscribe(el => {
        this.messages.push({
          content: el.value,
          createdAt: new Date().toString(),
          isOwnMessage: false,
          isTimeStamped: true
        });
      })
    };
  }

  public ngAfterViewInit(): void {
    this.messagesSub = this.messageRefsList.changes
      .subscribe(messagesList => {
        if (messagesList.length) {
          messagesList.last.nativeElement.scrollIntoView();
        };
      });
  }

  public ngOnDestroy(): void { }
}
