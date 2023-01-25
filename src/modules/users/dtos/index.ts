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

export {
  IUserCreateDTO,
  IUserLogin,
  IUserToken,
  ICreateUserLogin,
  ICreateUserToken,
};
