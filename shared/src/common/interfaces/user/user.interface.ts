export interface IUser {
  id: string
  name: string
  surname: string
  birthdate: Date
  phone: string
  email: string
  password: string
  isActive: boolean
  expiryDate: Date
  activationToken: string
  createdAt: Date
  updatedAt: Date
}
