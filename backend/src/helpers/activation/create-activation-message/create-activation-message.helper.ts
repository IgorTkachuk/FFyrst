import { ActivationStatus } from 'shared/common/enums';
import { IActivationMessage } from 'shared/common/interfaces';


const createactivationMessage = (
  status: ActivationStatus,
  message: string,
  email: string | null = null
) : IActivationMessage => ({
  status,
  message,
  email
});

export { createactivationMessage };
