import {
  Component, OnInit, OnDestroy,
  ViewChild, ElementRef, ChangeDetectorRef
} from '@angular/core';

import { Subscription, fromEvent } from 'rxjs';

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

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly httpService: HttpService
    ) { }

  @ViewChild('searchBox', {static: true}) public searchBox: ElementRef;

  public chats: IChat[];
  public chatBuffer: IChat[] = [];
  public searchIconUrl: string = '../assets/images/search-icon.png';
  public requestedChat: string = '';
  public chatsSub: Subscription;
  public onBlurSub: Subscription;

  public ngOnInit(): void {
    this.chatsSub = this.httpService.getChats().subscribe(data => {
      this.chats = data;
      this.chatBuffer = this.chats;
    });

    this.onBlurSub = fromEvent(document, 'click')
    .subscribe(el => {
      if (!this.searchBox.nativeElement.contains(el.target)) {
        this.requestedChat = '';
        this.chats = this.chatBuffer;
      }
      this.cdr.detectChanges();
  });
  }

  public onSearch(): void {
    this.requestedChat.length
    ? this.chats =  this.chats.filter(el => el.userName.includes(this.requestedChat))
    : this.chats = this.chatBuffer;
  }

  public ngOnDestroy(): void { }
}
