import { IActivationMessage } from 'shared/common/interfaces';


const createMessage = (message: string, success = false, email: string | null = null) : IActivationMessage => (
  {
    success,
    message,
    email
  }
);

export { createMessage };
