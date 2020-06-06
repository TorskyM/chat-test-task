import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { IChat } from 'src/app/interfaces/chat.interface';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.html',
  styleUrls: ['./chat-list.scss']
})
export class ChatListComponent {
  @Input() public chats$: Observable<IChat>;
}
