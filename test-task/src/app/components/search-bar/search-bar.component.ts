import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.scss']
})
export class SearchBarComponent {
  public searchIconUrl: string = '../assets/images/search-icon.png';
  public requestedChat: string = '';

  public onSearch() {
    console.log(this.requestedChat);
  }
}
