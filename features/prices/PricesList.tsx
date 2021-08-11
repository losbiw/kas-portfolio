import { FC } from 'react';
import { PriceItem } from 'types/Price';
import Item from './Item';

interface Props {
  prices: PriceItem[]
}

const PricesList: FC<Props> = ({ prices }: Props) => (
  <div className="mt-12">
    {
      prices.map(({ image, text }, index) => (
        <Item
          image={image}
          text={text}
          key={text.title}
          index={index}
        />
      ))
    }
  </div>
);

export default PricesList;
