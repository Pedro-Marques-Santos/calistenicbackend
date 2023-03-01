import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErrors";
import { IUserRepository } from "../../repositories/IUserRepository";
import { resolve } from "path";
import jwt from "jsonwebtoken";
import { IEmailProvider } from "../../../../shared/container/providers/EmailProvider/IEmailProvider";

@injectable()
class SendForgotPasswordEmailUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
    @inject("EtherealEmailProvider")
    private emailProvider: IEmailProvider
  ) {}

  async execute(email: string): Promise<void> {
    const user = await this.userRepository.findUserByEmail(email);

    if (!user) {
      throw new AppError("Email não resgistrado!", 401);
    }

    const templatePath = resolve(
      __dirname,
      "..",
      "..",
      "views",
      "emails",
      "forgotPassword.hbs"
    );

    const secretKey = "6392241ff0d34";

    const token = jwt.sign(
      {
        email: user.email,
      },
      secretKey,
      {
        expiresIn: "3h",
        subject: user.id,
      }
    );

    const variables = {
      name: user.name,
      link: `${process.env.FORGOT_EMAIL_URL}${token}`,
    };

    await this.emailProvider.sendMain(
      email,
      "Recuperação de senha",
      variables,
      templatePath
    );
  }
}

export { SendForgotPasswordEmailUseCase };
