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
}

const CachedImage = ({ cacheKey, source, placeholder, ...props }: CachedImageProps) => {
  const uri =
    typeof source === 'string' ? (source as string) : (source as ImageURISource).uri || '';

  const { imageUri } = useImageCache({ cacheKey, uri, placeholder });

  return <Image {...props} source={{ uri: imageUri }} />;
};

export { CachedImage };
