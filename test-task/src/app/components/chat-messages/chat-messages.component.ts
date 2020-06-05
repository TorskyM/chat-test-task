import { Component, OnInit, ViewChildren, QueryList, ElementRef, OnDestroy } from '@angular/core';

import { Subscription, Observable } from 'rxjs';

import { IMessage } from 'src/app/interfaces/message.interface';
import { IChat } from 'src/app/interfaces/chat.interface';
import { URLs } from 'src/app/app.enum';
import { HttpService } from 'src/app/services/http.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.html',
  styleUrls: ['./chat-messages.scss']
})
export class ChatMessagesComponent implements OnInit, OnDestroy {

  constructor(
    private readonly httpService: HttpService,
    private readonly chatService: ChatService) { }

  @ViewChildren('msgWrapper') messageRefsList: QueryList<ElementRef>;

  public currentChat: IChat = this.chatService.chatData;
  public messages: IMessage[] = this.currentChat.history;
  public newMessage;
  public sendImageUrl = URLs.SEND_ICON;
  public newMessageText: string = '';
  public chatСorrespondence: Array<IMessage> = [];
  public messagesSub: Subscription;

  public ngOnInit(): void {
  }

  public onKeyDown(event): void {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
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
    }
  }

  public ngAfterViewInit(): void {
    this.messagesSub = this.messageRefsList.changes
      .subscribe(messagesList => {
        if (messagesList.length) {
          messagesList.last.nativeElement.scrollIntoView();
        }
      });
  }

  public ngOnDestroy(): void { }
}
