import { ActionReducerMap } from '@ngrx/store';

import * as fromLoader from './store/chat/chat.reducer';

export interface IAppState {
  chat: fromLoader.IState
}

export const appReducer: ActionReducerMap<IAppState> = {
  chat: fromLoader.chatReducer
}
