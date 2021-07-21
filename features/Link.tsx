import { FC } from 'react';
import LinkInterface from '../types/Link';

const Link: FC<LinkInterface> = ({ href, icon: Icon, text }: LinkInterface) => (
  <a
    href={href}
    target="_blank"
    className="flex items-center py-4 px-6 rounded-xl duration-200 transform hover:scale-110 hover:bg-gray-700"
    rel="noreferrer"
  >
    <div className="w-10 h-10 md:w-14 md:h-14 mr-6 flex justify-start">
      <Icon />
    </div>
    <p className="text-2xl md:text-3xl">{text}</p>
  </a>
);

export default Link;
