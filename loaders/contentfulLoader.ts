import { ImageLoaderProps } from 'next/image';

const contentfulLoader = ({ src, quality, width }: ImageLoaderProps): string => {
  const params = [`w=${width}`];

  if (quality) {
    params.push(`q=${quality}`);
  }

  return `${src}?${params.join('&')}`;
};

export default contentfulLoader;
