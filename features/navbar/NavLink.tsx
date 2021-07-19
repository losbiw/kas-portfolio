import { FC } from 'react';
import Link from 'next/link';
import capitalizeFirstLetter from 'helpers/capitalize';

interface Props {
  url: string
}

const NavLink: FC<Props> = ({ url }: Props) => (
  <Link href={`/${url}`}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className="mr-28 text-lg">
      { url !== '' ? capitalizeFirstLetter(url) : 'Home' }
    </a>
  </Link>
);

export default NavLink;
