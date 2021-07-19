import { FC } from 'react';

interface Props {
  bold: string,
  thin: string
}

const Logo: FC<Props> = ({ bold, thin }: Props) => (
  <div className="flex ml-10 md:ml-0">
    <p className="font-semibold text-xl">{bold}</p>
    <p className="text-xl">{thin}</p>
  </div>
);

export default Logo;
