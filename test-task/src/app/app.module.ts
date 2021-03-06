import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ChatDashboardComponent } from './components/chat-dashboard/chat-dashboard.component';
import { ChatSidebarComponent } from './components/chat-sidebar/chat-sidebar.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { UserStatusComponent } from './components/user-status/user-status.component';
import { ChatItemComponent } from './components/chat-item/chat-item.component';
import { ChatMessagesComponent } from './components/chat-messages/chat-messages.component';
import { MessageItemComponent } from './components/message-item/message-item.component';
import { appReducer } from './app.store';

@NgModule({
  declarations: [
    AppComponent,
    ChatDashboardComponent,
    ChatSidebarComponent,
    ChatListComponent,
    UserStatusComponent,
    ChatItemComponent,
    ChatMessagesComponent,
    MessageItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
