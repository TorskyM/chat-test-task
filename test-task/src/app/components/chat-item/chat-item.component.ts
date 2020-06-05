import { Component, OnInit, Input } from '@angular/core';

import { IChat } from 'src/app/interfaces/chat.interface';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.html',
  styleUrls: ['./chat-item.scss']
})
export class ChatItemComponent implements OnInit {

  constructor(private readonly chatService: ChatService) { }

  @Input() chat: IChat;

  public ngOnInit(): void {
  }

  public chatClickHandler(): void {
    this.chatService.shareChatData(this.chat);
  }
}
