import { Component, Input } from '@angular/core';

import { IChat } from 'src/app/interfaces/chat.interface';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.html',
  styleUrls: ['./chat-item.scss']
})
export class ChatItemComponent {

  constructor(private readonly chatService: ChatService) { }

  @Input() public chat: IChat;

  public chatClickHandler(): void {
    this.chatService.shareChatData(this.chat);
  }
}
