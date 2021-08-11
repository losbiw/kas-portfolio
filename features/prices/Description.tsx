import Paragraph from 'features/Paragraph';
import Title from 'features/Title';
import { FC } from 'react';
import { Text as PriceText } from 'types/Price';

const Description: FC<PriceText> = ({ title, description }: PriceText) => (
  <div className="flex flex-col">
    <Title>{title}</Title>

    <ul>
      { description.map((desc) => {
        if (typeof desc !== 'string') {
          return (
            <li className="flex justify-center lg:justify-start whitespace-pre" key={desc.text as string}>
              <Paragraph>
                {desc.text}
                :
                {' '}
              </Paragraph>
              <span className="font-semibold">
                <Paragraph>
                  {desc.price}
                </Paragraph>
              </span>
            </li>
          );
        }

        return (
          <li key={desc as string}>
            <Paragraph>{desc}</Paragraph>
          </li>
        );
      }) }
    </ul>
  </div>
);

export default Description;
