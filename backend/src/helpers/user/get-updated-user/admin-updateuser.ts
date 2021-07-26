import { IProfile, IUser } from 'shared';
const adminUpdatedUser = (user: IUser, newUserData: IUser): IUser => {
  return {
    id: user.id,
    firstName: newUserData.firstName,
    lastName: newUserData.lastName,
    email: newUserData.email,
    phoneNumber: newUserData.phoneNumber,
    birthDate: new Date(newUserData.birthDate as Date),
    avatar: user.avatar,
    cityAddress: newUserData.cityAddress,
    dependantsAmount: newUserData.dependantsAmount,
    marriageStatus: newUserData.marriageStatus,
    postalCode: newUserData.postalCode,
    stateAddress: newUserData.stateAddress,
    streetAddress: newUserData.streetAddress,
    updatedAt: user.updatedAt,
    activationTokenExpiration: user.activationTokenExpiration,
    activationToken: user.activationToken,
    password: user.password,
    isActive: user.isActive,
    createdAt: user.createdAt,
  };
};

export { adminUpdatedUser };
