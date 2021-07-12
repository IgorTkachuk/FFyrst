export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface SucceedLogin {
  tokens: ITokens
}
