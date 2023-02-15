import fs from "fs";

export const deleteFile = async (filename: string) => {
  // verificar se esse arquivo exist
  try {
    await fs.promises.stat(filename);
  } catch {
    return;
  }
  // remove o arquivo
  await fs.promises.unlink(filename);
};
