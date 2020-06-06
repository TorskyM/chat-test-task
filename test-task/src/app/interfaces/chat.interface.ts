import { IMessage } from './message.interface';

export interface IChat {
  userName: string;
  avatarUrl: string;
  isOnline: boolean;
  history: Array<IMessage>
}
