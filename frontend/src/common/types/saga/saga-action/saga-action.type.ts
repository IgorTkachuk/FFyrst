import { Action, PayloadAction } from '@reduxjs/toolkit';
import { IProfile } from 'shared';

export interface SagaAction extends Action, PayloadAction {
  type: string;
}

export interface SagaUserAction
  extends Action,
    PayloadAction<{ user: IProfile } & { token: string }> {
  type: string;
}
