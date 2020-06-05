import { Action } from '@ngrx/store';
import { IChat } from '../../interfaces/chat.interface';

export enum ChatActionTypes {
  SetCurrentChat = '[Chat] Set current chat',
  LoadChatData = '[Chat] Load chat data'
}

export class SetCurrentChat implements Action {
  constructor(public payload: IChat) { }

  public static readonly TYPE = ChatActionTypes.SetCurrentChat;
  public type = SetCurrentChat.TYPE;
}

export class LoadChatData implements Action {
  public static readonly TYPE = ChatActionTypes.LoadChatData;
  public type = LoadChatData.TYPE;
}

export type ChatActions = any;