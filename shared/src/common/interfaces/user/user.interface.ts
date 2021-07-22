export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  birthDate?: Date;
  avatar: string;
  isActive: boolean;
  activationTokenExpiration: Date;
  activationToken: string;
  createdAt: Date;
  updatedAt: Date;
}
