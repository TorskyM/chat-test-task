import { Component, OnInit, Input } from '@angular/core';

import { IChat } from 'src/app/interfaces/chat.interface';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.html',
  styleUrls: ['./chat-item.scss']
})
export class ChatItemComponent implements OnInit {

  constructor(private readonly httpService: HttpService) { }

  @Input() chat: IChat;

  ngOnInit(): void {
    console.log(this.chat);
    
  }

}
