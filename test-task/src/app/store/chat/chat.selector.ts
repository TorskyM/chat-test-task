import { createSelector } from '@ngrx/store';
import { getChat } from '../../app.selector';
import { IState } from './chat.reducer';

export const getChatData = createSelector(
  getChat,
  (state: IState) => state
);