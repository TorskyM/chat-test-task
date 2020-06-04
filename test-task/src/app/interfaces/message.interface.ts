export interface IMessage {
  content: string;
  createdAt: string;
  isOwnMessage?: boolean;
  isTimeStamped: boolean;
}