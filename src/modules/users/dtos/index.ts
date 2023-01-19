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

interface IUserToken {
  name: string;
  token: string;
}

export { IUserCreateDTO, IUserLogin, IUserToken };
