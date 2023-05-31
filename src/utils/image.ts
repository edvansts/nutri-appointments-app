import { getInfoAsync, makeDirectoryAsync } from 'expo-file-system';
import { IMAGE_CACHE_DIRECTORY } from '../constants/file-system';

export const initImageCacheDirectory = async () => {
  try {
    const { exists, isDirectory } = await getInfoAsync(IMAGE_CACHE_DIRECTORY);

    if (isDirectory && exists) {
      return;
    }

    await makeDirectoryAsync(IMAGE_CACHE_DIRECTORY);
  } catch (err) {}
};
