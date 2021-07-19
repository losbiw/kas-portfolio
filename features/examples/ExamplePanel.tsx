import { FC, useEffect, useState } from 'react';
import { Picture, Align } from '../../interfaces/Pictures.d';
import Example from './Example';

interface Props {
  pictures: Picture[]
}

const calculateOffset = (index: number, windowWidth: number | undefined): string => {
  const isWindowSmaller = windowWidth && windowWidth < 640;

  if (index === 0) {
    return isWindowSmaller ? 'left-12' : 'left-24';
  } if (index === 2) {
    return isWindowSmaller ? 'right-12' : 'right-24';
  }

  return '';
};

const calculateAlignment = (index: number, windowWidth: number | undefined): Align | undefined => {
  if (index === 0 && windowWidth && windowWidth < 640) {
    return Align.Top;
  }

  return undefined;
};

const ExamplesPanel: FC<Props> = ({ pictures }: Props) => {
  const [windowWidth, setWindowWidth] = useState<number>();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div className="flex justify-center items-end mb-16 sm:mb-24 xl:mb-0">
      {
      pictures.map(({
        src, alt, direction, size,
      }, i) => {
        const offset = calculateOffset(i, windowWidth);
        const align = calculateAlignment(i, windowWidth);

        return (
          <Example
            src={src}
            alt={alt}
            align={align}
            offset={offset}
            direction={direction}
            size={size}
            key={src}
          />
        );
      })
    }
    </div>
  );
};

export default ExamplesPanel;
