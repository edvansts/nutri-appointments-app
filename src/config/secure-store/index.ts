/* eslint-disable @typescript-eslint/no-explicit-any */
import { setItemAsync, getItemAsync, deleteItemAsync } from 'expo-secure-store';

export async function saveItem(key: string, value: any) {
  const stringifiedValue = JSON.stringify(value);

  await setItemAsync(key, stringifiedValue);
}

export async function readItem<T = any>(key: string): Promise<T | null> {
  const result = await getItemAsync(key);

  if (!result) {
    return null;
  }

  const parsedResult = JSON.parse(result) as T;

  return parsedResult;
}

export async function deleteItem(key: string) {
  await deleteItemAsync(key);
}
