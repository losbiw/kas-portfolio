import { FC } from 'react';

const Title: FC = ({ children }) => (
  <h1 className="font-semibold text-2xl sm:text-4xl mb-6 sm:mb-10 text-center xl:text-left">
    {children}
  </h1>
);

export default Title;
