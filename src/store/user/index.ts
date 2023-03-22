import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { deleteItem, readItem, saveItem } from '../../config/secure-store';
import { User } from '../../types/user';

const USER_STORE_KEY = `token-store`;

interface UserState {
  user?: User;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: undefined,
      setUser: (user) => set({ user }),
    }),
    {
      name: USER_STORE_KEY,
      getStorage: () => ({
        setItem: saveItem,
        getItem: readItem,
        removeItem: deleteItem,
      }),
    }
  )
);
