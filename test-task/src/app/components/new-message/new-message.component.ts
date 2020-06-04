import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../services/http.service'
import { IMessage } from 'src/app/interfaces/message.interface';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.html',
  styleUrls: ['./new-message.scss']
})
export class NewMessageComponent implements OnInit {

  constructor(private readonly httpService: HttpService) { }

  public sendImageUrl = '../../../assets/images/send-icon.png'
  public newMessageText: string = '';
  public chatСorrespondence: Array<IMessage> = [];

  ngOnInit(): void {
  }

  public onKeyDown(event): void {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }

  public sendMessage(): void {
    if (this.newMessageText.length) {
      const newMessage = {
        isOwnMessage: true,
        content: this.newMessageText,
      };

      this.newMessageText = '';

      this.httpService.getJoke().subscribe(el => {
        this.chatСorrespondence.push({
          content: el.value,
          createdAt: new Date().toString(),
          isOwnMessage: false,
          isTimeStamped: true
        });
      })
    }
  }
}
