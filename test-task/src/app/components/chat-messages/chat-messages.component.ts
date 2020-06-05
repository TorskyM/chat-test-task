import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

import { Subscription, Observable } from 'rxjs';

import { IMessage } from 'src/app/interfaces/message.interface';
import { IChat } from 'src/app/interfaces/chat.interface';
import { URLs } from 'src/app/app.enum';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.html',
  styleUrls: ['./chat-messages.scss']
})
export class ChatMessagesComponent implements OnInit {

  constructor(private readonly httpService: HttpService) { }

  @ViewChildren('msgWrapper') messageRefsList: QueryList<ElementRef>;

  public messages: IMessage[] = [];
  public newMessage;
  public sendImageUrl = URLs.SEND_ICON;
  public newMessageText: string = '';
  public chatСorrespondence: Array<IMessage> = [];
  public messagesSub: Subscription;
  public userChat: IChat = {
    userName: 'Josefina',
    avatarUrl: '',
    isOnline: true,
    history: [{
      content: 'OIJo  aisjon sa',
      createdAt: 'asdasdasda',
      isOwnMessage: false,
      isTimeStamped: true
    },
    {
      content: 'test test test',
      createdAt: 'Test test test',
      isOwnMessage: false,
      isTimeStamped: true
    },
    ]
  }

  public ngOnInit(): void {
    //TODO Fetch chat history
    this.messages[0] = {
      content: 'hello',
      createdAt: new Date().toString(),
      isOwnMessage: false,
      isTimeStamped: true
    }
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
      console.log(this.messages);
      
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
}
