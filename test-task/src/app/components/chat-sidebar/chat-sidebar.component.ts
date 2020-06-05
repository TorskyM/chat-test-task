import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { HttpService } from 'src/app/services/http.service';
import { IChat } from 'src/app/interfaces/chat.interface';


@AutoUnsubscribe()
@Component({
  selector: 'app-chat-sidebar',
  templateUrl: './chat-sidebar.html',
  styleUrls: ['./chat-sidebar.scss']
})
export class ChatSidebarComponent implements OnInit, OnDestroy {

  constructor(private readonly httpService: HttpService) { }

  public chats: IChat[];
  public searchIconUrl: string = '../assets/images/search-icon.png';
  public requestedChat: string = '';
  public chatsSub: Subscription;

  public ngOnInit(): void {
    this.chatsSub = this.httpService.getChats().subscribe(data => this.chats = data);
  }

  public onSearch() {
    this.chats = this.chats.filter(el => { console.log( [...el.userName].forEach((char, i) => char === this.requestedChat[i]));
    return [...el.userName].forEach((char, i) => char === this.requestedChat[i] ? el : null)});
  }

  public ngOnDestroy() : void { }
}
