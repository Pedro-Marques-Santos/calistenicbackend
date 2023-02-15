import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

//disckStorage deixa disponivel para a gente passar o destino do local q quer salvar
//folder é o local q quer que guarde o avatar, vai ser opcional da rota

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`;

          return callback(null, fileName);
        },
      }),
    };
  },
};
