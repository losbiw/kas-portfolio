import Example from 'features/examples/Example';
import { FC } from 'react';
import { Direction, Size } from '../../types/Pictures.d';
import { PriceItem } from '../../types/Price';
import Description from './Description';

interface Props extends PriceItem {
  index: number
}

const Item: FC<Props> = ({
  image, text, index,
}: Props) => {
  const { src, alt } = image;

  const isUneven = index % 2 !== 0;
  const directionSide = isUneven ? Direction.Left : Direction.Right;

  return (
    <div className={`flex flex-col lg:flex-row items-center justify-center my-20 lg:my-24 py-16 px-4 lg:p-16 rounded-semi
    bg-gray-700 bg-opacity-20 ${isUneven && 'lg:flex-row-reverse'}`}
    >
      <div className={`mb-12 lg:mb-0 ${isUneven ? 'lg:ml-36' : 'lg:mr-36'}`}>
        <Example
          offset=""
          src={src}
          alt={alt}
          size={Size.Middle}
          direction={directionSide}
        />
      </div>
      <Description title={text.title} description={text.description} />
    </div>
  );
};

export default Item;
