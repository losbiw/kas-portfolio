import { Picture } from './Pictures';

type Price = `${number}$`;

interface Description {
  text: string,
  price: Price
}

interface Text {
  title: string,
  description: Description[] | string[]
}

interface PriceItem {
  image: Picture,
  text: Text
}

export { PriceItem, Text };
