interface IEmailProvider {
  sendMain(
    to: string,
    subject: string,
    variables: any,
    path: string
  ): Promise<void>;
}

export { IEmailProvider };
