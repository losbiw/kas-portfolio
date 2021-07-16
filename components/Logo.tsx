import { FC } from "react";

interface Props {
  bold: string,
  thin: string
}

const Logo: FC<Props> = ({ bold, thin }: Props) => (
  <div className="flex">
    <p className="font-semibold">{bold}</p>
    <p>{thin}</p>
  </div>
);

export default Logo;