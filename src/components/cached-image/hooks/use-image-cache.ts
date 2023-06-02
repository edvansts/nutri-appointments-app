import { useEffect, useState } from 'react';
import { useIsMounted } from 'usehooks-ts';
import { getInfoAsync, downloadAsync } from 'expo-file-system';
import { removeFileExtension, removeHttpPrefixFromUri } from '../../../utils/transform';
import { IMAGE_CACHE_DIRECTORY } from '../../../constants/file-system';

interface useCacheProps {
  uri: string;
  cacheKey?: string;
  placeholder?: {
    width: number;
    height: number;
    text?: string;
  };
}

const PLACEHOLDER_IMAGE = 'https://via.placeholder.com';

const useImageCache = ({ uri, cacheKey: cacheKeyProps, placeholder }: useCacheProps) => {
  const isMounted = useIsMounted();
  const [imageUri, setImageUri] = useState<string>('');

  const normalizedCacheUri = removeHttpPrefixFromUri(removeFileExtension(uri));

  const cacheKey = cacheKeyProps || normalizedCacheUri || '';

  const filesystemURI = `${IMAGE_CACHE_DIRECTORY}${cacheKey}`;

  useEffect(() => {
    loadImage({ fileURI: filesystemURI });
  }, []);

  const loadImage = async ({ fileURI }) => {
    try {
      const imageContainsNull = uri.includes('null');

      if (imageContainsNull && isMounted()) {
        if (placeholder == null) {
          setImageUri('');
          return;
        }

        const newImageUri = `${PLACEHOLDER_IMAGE}/${placeholder.width}x${placeholder.height}${
          placeholder.text ? `?text=${placeholder.text}` : ''
        }`;

        setImageUri(newImageUri);
        return;
      }

      const metadata = await getInfoAsync(fileURI);

      if (!metadata.exists && isMounted()) {
        setImageUri(uri);

        await downloadAsync(uri, fileURI);
        return;
      }

      if (isMounted()) {
        setImageUri(fileURI);
      }
    } catch (err) {
      setImageUri(uri);
    }
  };

  // const checkImageCacheDirectory = async () => {
  //   try {
  //     const { exists, isDirectory } = await getInfoAsync(IMAGE_CACHE_DIRECTORY);

  //     if (isDirectory && exists) {
  //       return;
  //     }

  //     await makeDirectoryAsync(IMAGE_CACHE_DIRECTORY);
  //   } catch (err) {}
  // };

  return {
    imageUri,
  };
};

export { useImageCache };
