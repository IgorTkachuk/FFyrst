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

export interface SagaActionWithTokenAndPayload<T> extends Action, PayloadAction<T & { token: string }> {
  type: string
}

export interface SagaActionWithToken extends Action, PayloadAction<{ token: string }> {
  type: string
}
