interface IUserCreateDTO {
  name: string;
  email: string;
  password: string;
  id?: string;
  avatar?: string;
}

interface IUserLogin {
  email: string;
  name: string;
  password: string;
  id: string;
  verifyLogin: boolean;
}

interface ICreateUserLogin {
  email: string;
  name: string;
  password: string;
}

interface ICreateUserToken {
  token: string;
}

interface IUserToken {
  name: string;
  token: string;
}

interface ITokenData {
  password: string;
  email: string;
}

export {
  IUserCreateDTO,
  IUserLogin,
  IUserToken,
  ICreateUserLogin,
  ICreateUserToken,
  ITokenData,
};
