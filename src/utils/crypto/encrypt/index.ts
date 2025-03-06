import CryptoJS from "crypto-js";
import { enviroment } from "@config/environment";

const secretKey = CryptoJS.enc.Hex.parse(enviroment.SECRET_KET_PORTAL_ID);
const iv = CryptoJS.enc.Hex.parse(btoa(enviroment.SECRET_KET_PORTAL_IV));

const encrypt = (data: string): string => {
  try {
    const encrypted = CryptoJS.AES.encrypt(data, secretKey, { iv });
    if (encrypted) {
      return encrypted.toString();
    } else {
      throw new Error("Encryption failed");
    }
  } catch (error) {
    console.error("Encryption error:", error);

    return error instanceof Error ? error.message : "Unknown encryption error";
  }
};

export { encrypt };
