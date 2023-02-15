// a função desse middleware é verificar se o token jwt é valido // vai ser colocado em uma rota
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/users/repositories/implemantation/UserRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // sao as informacoes q vem dentro do Header do Request - token
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  // result se existir: Bearer 841awd482aw6d8awd41awd5a8wd5awd
  // [0]: Bearer
  // [1]: 841awd482aw6d8awd41awd5a8wd5awd

  const [, token] = authHeader.split(" "); // vai quebrar onde tiver o espaço em dois arrays

  try {
    const { sub: user_id } = verify(token, "6392241ff0d34") as IPayload; // token, chave secreta

    const userRepository = new UserRepository();
    const user = await userRepository.findUserById(user_id);

    if (!user) {
      throw new Error("User does not exists!");
    }

    //register um novo tipo de request ao utilizar esse middleware
    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new Error("Invalid Token");
  }
}
