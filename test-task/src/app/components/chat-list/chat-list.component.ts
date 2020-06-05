import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { IChat } from 'src/app/interfaces/chat.interface';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.html',
  styleUrls: ['./chat-list.scss']
})
export class ChatListComponent implements OnInit {

  constructor(private readonly httpService: HttpService) { }

  public chats$: Observable<IChat>;

  ngOnInit(): void {
    this.chats$ = this.httpService.getChats();
  }

}
