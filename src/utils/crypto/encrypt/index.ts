import { secretKeyPortalId } from "@config/environment";
import CryptoJS from "crypto-js";

const secretKey = CryptoJS.enc.Hex.parse(secretKeyPortalId);
const iv = CryptoJS.enc.Hex.parse("abcdef9876543210abcdef9876543210");

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