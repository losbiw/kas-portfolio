import { FC } from 'react';
import LocalImage from 'features/LocalImage';
import {
  ExtendedPicture, Size, Align, Direction,
} from '../../types/Pictures.d';

interface Props extends ExtendedPicture {
  offset: string,
  align?: Align
}

const Example: FC<Props> = ({
  src, alt, direction, size, offset, align,
}: Props) => {
  let sizeStyle;

  if (size === Size.Big) {
    sizeStyle = 'w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 my-8 sm:mb-8';
  } else if (size === Size.Middle) {
    sizeStyle = 'w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72';
  } else if (size === Size.Small) {
    sizeStyle = 'w-24 h-24 sm:w-36 sm:h-36 lg:w-56 lg:h-56 z-10';
  }

  const rotationDegree = direction === Direction.Left ? '-rotate-6' : 'rotate-6';
  const alignment = align === Align.Top && 'self-start';

  return (
    <div className={`bg-gray-200 p-1 rounded-huge relative shadow-xl ${offset} ${sizeStyle} ${alignment}`}>
      <div className={`bg-gray-700 transform p-1 sm:p-2 w-full h-full rounded-huge ${rotationDegree}`}>
        <div className="w-full h-full relative rounded-huge overflow-hidden">
          <LocalImage src={src} alt={alt} />
        </div>
      </div>
    </div>
  );
};

Example.defaultProps = {
  align: undefined,
};

export default Example;
