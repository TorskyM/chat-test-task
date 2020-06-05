import { Component, OnInit } from '@angular/core';

import  *  as  data  from  '../../data.json';
import { IChat } from 'src/app/interfaces/chat.interface';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.html',
  styleUrls: ['./chat-list.scss']
})
export class ChatListComponent implements OnInit {

  public chats: IChat[] = data;

  ngOnInit(): void {
    console.log(data);
  }

}
