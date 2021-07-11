import { Action, PayloadAction } from '@reduxjs/toolkit';

export interface SagaAction extends Action, PayloadAction {
  type: string;
}
