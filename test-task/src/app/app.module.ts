import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatDashboardComponent } from '../components/chat-dashboard/chat-dashboard.component';
import { ChatSidebarComponent } from '../components/chat-sidebar/chat-sidebar.component';
import { ChatListComponent } from '../components/chat-list/chat-list.component';
import { UserStatusComponent } from '../components/user-status/user-status.component';
import { ChatItemComponent } from '../components/chat-item/chat-item.component';
import { ChatMessagesComponent } from '../components/chat-messages/chat-messages.component';
import { UserComponent } from '../components/user/user.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatDashboardComponent,
    ChatSidebarComponent,
    ChatListComponent,
    UserStatusComponent,
    ChatItemComponent,
    ChatMessagesComponent,
    UserComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
