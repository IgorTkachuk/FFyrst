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
  postalCode?: string,
  stateAddress?: string,
  cityAddress?: string,
  streetAddress?: string,
  marriageStatus?: boolean,
  dependantsAmount?: number,
  activationTokenExpiration: Date;
  activationToken: string;
  createdAt: Date;
  updatedAt: Date;
}
