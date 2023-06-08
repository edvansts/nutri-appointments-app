import React from 'react';
import { type ImageURISource, Image, type ImageProps } from 'react-native';
import { useImageCache } from './hooks/use-image-cache';

interface CachedImageProps extends ImageProps {
  cacheKey?: string;
  placeholder?: {
    width: number;
    height: number;
    text?: string;
  };
  isCacheActived?: boolean;
}

const CachedImage = ({
  cacheKey,
  source,
  placeholder,
  isCacheActived = true,
  ...props
}: CachedImageProps) => {
  const uri = source
    ? typeof source === 'string'
      ? (source as string)
      : (source as ImageURISource).uri
    : undefined;

  const { imageUri } = useImageCache({ cacheKey, uri, placeholder, isCacheActived });

  return <Image {...props} source={source ? { uri: imageUri } : {}} />;
};

export { CachedImage };
