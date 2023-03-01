import nodemailer, { SentMessageInfo, Transport } from "nodemailer";
import { IEmailProvider } from "../IEmailProvider";

import handlebars from "handlebars";
import fs from "fs";

class EtherealEmailProvider implements IEmailProvider {
  async sendMain(
    to: string,
    subject: string,
    variables: any,
    path: string
  ): Promise<void> {
    nodemailer.createTestAccount(async (err, account) => {
      if (err) {
        console.error("Failed to create a testing account. " + err.message);
      }

      let transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      // fazer leitura do arquivo html
      const templateFileContent = fs.readFileSync(path).toString("utf-8");

      const templateParse = handlebars.compile(templateFileContent);

      const templateHTML = templateParse(variables);

      const message = await transporter.sendMail({
        to,
        from: "Calisthenic <calisthenictest@teste>",
        subject,
        html: templateHTML,
      });

      console.log("Message sent: %s", message);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
    });

    return;
  }
}

export { EtherealEmailProvider };
