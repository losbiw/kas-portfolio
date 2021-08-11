import { PriceItem } from '../../types/Price';

const items: PriceItem[] = [
  {
    image: {
      src: 'prices/split-guy.png',
      alt: 'Simple headshot of my character with warm colors',
    },
    text: {
      title: 'Headshots',
      description: [
        {
          text: 'Colored + shading',
          price: '20$',
        },
        {
          text: 'Sketch',
          price: '10$',
        },
      ],
    },
  },
  {
    image: {
      src: 'prices/split-guy.png',
      alt: 'First drawing I’ve liked recently but that may change in four hours, who knows 😼',
    },
    text: {
      title: 'Half body',
      description: [
        {
          text: 'Full color + shading',
          price: '35$',
        },
        {
          text: 'Sketch',
          price: '25$',
        },
      ],
    },
  },
  {
    image: {
      src: 'prices/sussy.jpg',
      alt: 'First drawing I’ve liked recently but that may change in four hours, who knows 😼',
    },
    text: {
      title: 'Additional info',
      description: [
        '10$ any additional characters',
        'Flat background is free',
        'Other can be negotiated',
      ],
    },
  },
];

export default items;
