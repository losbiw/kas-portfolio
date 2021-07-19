import { FC } from 'react';
import Image from 'next/image';
import { Picture, Direction, Size } from '../../interfaces/Pictures.d';

const Example: FC<Picture> = ({
  src, alt, direction, size,
}: Picture) => (
  <div className={`bg-gray-100 p-2 ${size === Size.Big ? 'w-96 h-96' : 'w-56 h-56'}`}>
    <div className={`bg-gray-700 transform p-3 w-full h-full ${direction === Direction.Left ? '-rotate-6' : 'rotate-6'}`}>
      <Image
        src={src[0] === '/' ? src : `/${src}`}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
    </div>
  </div>
);

export default Example;
