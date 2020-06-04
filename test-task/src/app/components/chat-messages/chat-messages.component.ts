import { Component, OnInit } from '@angular/core';

import { IMessage } from 'src/app/interfaces/message.interface';
import { IChat } from 'src/app/interfaces/chat.interface';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.html',
  styleUrls: ['./chat-messages.scss']
})
export class ChatMessagesComponent implements OnInit {
  public message: IMessage = {
    content: 'OIJo  aisjon sa',
    createdAt: 'asdasdasda',
    isOwnMessage: true,
    isTimeStamped: true
  }

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

  ngOnInit(): void {
  }

}
