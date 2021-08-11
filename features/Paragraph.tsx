import { FC } from 'react';

const Paragraph: FC = ({ children }) => (
  <p className="text-lg leading-loose sm:text-2xl sm:leading-loose text-center xl:text-left">
    {children}
  </p>
);

export default Paragraph;
