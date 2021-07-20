import { IProfile, IUser } from 'shared';

const getUpdatedUser = (user: IUser, newUserData: IProfile): IUser => {
  return {
    id: user.id,
    firstName: newUserData.firstName,
    lastName: newUserData.lastName,
    email: newUserData.email,
    phoneNumber: newUserData.phoneNumber,
    birthDate: new Date(newUserData.birthDate),
    avatar: user.avatar,
    updatedAt: user.updatedAt,
    activationTokenExpiration: user.activationTokenExpiration,
    activationToken: user.activationToken,
    password: user.password,
    isActive: user.isActive,
    createdAt: user.createdAt,
  };
};

export { getUpdatedUser };
