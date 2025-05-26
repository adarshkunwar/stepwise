import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_ENCRYPTED_KEY;
console.log(SECRET_KEY, "jkkjkjk");

export const encryptedLocalStorage = {
  getItem(key: string): string | null {
    try {
      const encrypted = localStorage.getItem(key);
      if (!encrypted) return null;

      const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
      return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.error(`Decryption error for ${key}:`, error);
      return null;
    }
  },

  setItem(key: string, value: string): void {
    try {
      const encrypted = CryptoJS.AES.encrypt(value, SECRET_KEY).toString();
      localStorage.setItem(key, encrypted);
    } catch (error) {
      console.error(`Encryption error for ${key}:`, error);
    }
  },

  removeItem(key: string): void {
    localStorage.removeItem(key);
  },
};
