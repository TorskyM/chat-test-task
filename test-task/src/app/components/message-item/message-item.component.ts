import { Component, OnInit, Input } from '@angular/core';

import { IMessage } from 'src/app/interfaces/message.interface';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.html',
  styleUrls: ['./message-item.scss']
})
export class MessageItemComponent implements OnInit {
  @Input() public message: IMessage;

  public messagePostTime: string;
  public postFromNow: string;
  public currentTime = new Date();

  ngOnInit(): void {
    this.messagePostTime = this.message.createdAt ||
    this.currentTime.toString();
  }
}
