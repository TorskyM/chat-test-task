import { SetCurrentChat, LoadChatData, ChatActions } from './chat.action';
import { IChat } from '../../interfaces/chat.interface';

export interface IState {
  chat: IChat,
  loadChat: IChat
}

export const initialState: IState = {
  chat: {
    userName: 'Someone',
    avatarUrl: '../../../assets/images/default-profile.png',
    isOnline: true,
    history: []
  },
  loadChat: null
}

export function chatReducer(state = initialState, action: ChatActions): IState {
  const { type, payload } = action;

  switch (type) {
    case SetCurrentChat.TYPE:
      return {
        ...state,
        chat: payload
      }

    case LoadChatData.TYPE:
      return {
        ...state,
        loadChat: state.chat
      };

    default:
      return state;
  }
}
