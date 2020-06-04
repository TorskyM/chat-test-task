import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.html',
  styleUrls: ['./new-message.scss']
})
export class NewMessageComponent implements OnInit {
  public sendImageUrl = '../../../assets/images/send-icon.png'


  ngOnInit(): void {
  }

}
