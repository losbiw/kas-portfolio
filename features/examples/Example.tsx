import { FC } from 'react';
import Image from 'next/image';
import {
  Picture, Size, Align, Direction,
} from '../../types/Pictures.d';

interface Props extends Picture {
  offset: string,
  align?: Align
}

const Example: FC<Props> = ({
  src, alt, direction, size, offset, align,
}: Props) => {
  const calcSize = size === Size.Big ? 'w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 my-8 sm:mb-8' : 'w-24 h-24 sm:w-36 sm:h-36 lg:w-56 lg:h-56 z-10';

  const rotationDegree = direction === Direction.Left ? '-rotate-6' : 'rotate-6';
  const alignment = align === Align.Top && 'self-start';

  return (
    <div className={`bg-gray-200 p-1 rounded-huge relative shadow-xl ${offset} ${calcSize} ${alignment}`}>
      <div className={`bg-gray-700 transform p-1 sm:p-2 w-full h-full rounded-huge ${rotationDegree}`}>
        <div className="w-full h-full relative rounded-huge overflow-hidden">
          <Image
            src={src[0] === '/' ? src : `/${src}`}
            alt={alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

Example.defaultProps = {
  align: undefined,
};

export default Example;
