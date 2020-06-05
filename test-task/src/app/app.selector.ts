import { IAppState } from './app.store';

export const getChat = (state: IAppState) => state.chat;