import { FC } from 'react';
import { Picture } from '../../interfaces/Pictures';
import Example from './Example';

interface Props {
  pictures: Picture[]
}

const ExamplesPanel: FC<Props> = ({ pictures }: Props) => (
  <div className="flex justify-center items-end">
    {
      pictures.map(({
        src, alt, direction, size,
      }) => (
        <Example
          src={src}
          alt={alt}
          direction={direction}
          size={size}
          key={src}
        />
      ))
    }
  </div>
);

export default ExamplesPanel;
