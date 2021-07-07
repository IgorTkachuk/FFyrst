import { UserSex } from '~/common/enums';
import { UserType } from '~/common/enums';

export interface IUser {
  id: string
  name: string
  surname: string
  birthdate: Date
  sex: UserSex
  type: UserType
  phone: string
  email: string
  password: string
  imagePath: string
  createdAt: Date
  updatedAt: Date
}
