import {ActivationStatus} from '~/common/enums/activation'

export interface IActivationMessage {
  status: ActivationStatus
  message: string
  email: string | null
}
