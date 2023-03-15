import create from "zustand";
import { persist } from "zustand/middleware";
import { deleteItem, readItem, saveItem } from "../../config/secure-store";

const TOKEN_STORE_KEY = `token-store`;

interface TokenState {
  token?: string;
  setToken: (token: string) => void;
}

export const useTokenStore = create<TokenState>()(
  persist(
    (set) => ({
      token: undefined,
      setToken: (token) => set({ token }),
    }),
    {
      name: TOKEN_STORE_KEY,
      getStorage: () => ({
        setItem: saveItem,
        getItem: readItem,
        removeItem: deleteItem,
      }),
    }
  )
);
