import { FC } from 'react';

interface Props {
  bold: string,
  thin: string
}

const Logo: FC<Props> = ({ bold, thin }: Props) => (
  <div className="flex">
    <p className="font-semibold text-lg">{bold}</p>
    <p className="text-lg">{thin}</p>
  </div>
);

export default Logo;
