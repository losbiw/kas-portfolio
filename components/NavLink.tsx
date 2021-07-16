import { FC } from "react";
import Link from 'next/link';
import capitalizeFirstLetter from "helpers/capitalize";

interface Props {
  url: string
}

const NavLink: FC<Props> = ({ url }: Props) => (
  <Link href={ `/${url}` }>
    <a className="mr-28">
      { url !== '' ? capitalizeFirstLetter(url) : 'Home' }
    </a>
  </Link>
);

export default NavLink;
