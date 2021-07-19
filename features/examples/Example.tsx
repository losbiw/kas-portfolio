import { FC } from 'react';
import Image from 'next/image';
import { Picture, Direction, Size } from '../../interfaces/Pictures.d';

const Example: FC<Picture> = ({
  src, alt, direction, size,
}: Picture) => (
  <div className={`bg-gray-300 p-2 rounded-3xl ${size === Size.Big ? 'w-96 h-96' : 'w-56 h-56'}`} style={{ borderRadius: '4.5rem' }}>
    <div className={`bg-gray-700 transform p-3 w-full h-full ${direction === Direction.Left ? '-rotate-6' : 'rotate-6'}`}>
      <div className="w-full h-full relative">
        <Image
          src={src[0] === '/' ? src : `/${src}`}
          alt={alt}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  </div>
);

export default Example;
