import Image from 'next/image';
import { FC } from 'react';
import { Picture } from '../types/Pictures';

const LocalImage: FC<Picture> = ({ src, alt }: Picture) => (
  <Image
    src={src[0] === '/' ? src : `/${src}`}
    alt={alt}
    layout="fill"
    objectFit="cover"
  />
);

export default LocalImage;
