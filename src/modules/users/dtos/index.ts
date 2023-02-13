interface IUserCreateDTO {
  name: string;
  email: string;
  password: string;
}

interface IUserLogin {
  email: string;
  name: string;
  password: string;
  verifyLogin: boolean;
}

interface ICreateUserLogin {
  email: string;
  name: string;
  password: string;
}

interface ICreateUserToken {
  name: string;
  token: string;
}

interface IUserToken {
  name: string;
  token: string;
}

interface IProfileUserDTO {
  userExistToken: boolean;
  name: string;
  motivation: string;
  id: string;
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
  IProfileUserDTO,
  ITokenData,
};
