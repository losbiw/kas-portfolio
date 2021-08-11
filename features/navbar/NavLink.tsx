import { FC } from 'react';
import Link from 'next/link';
import capitalizeFirstLetter from 'helpers/capitalize';

interface Props {
  url: string,
  isActive: boolean
}

const NavLink: FC<Props> = ({ url, isActive }: Props) => (
  <div className={`text-lg my-3 lg:my-0 lg:mr-16 list-none hover:text-xl duration-200 ${isActive ? 'underlined' : ''}`}>
    <Link href={`/${url}`}>
      { url !== '' ? capitalizeFirstLetter(url) : 'Home' }
    </Link>
  </div>
);

export default NavLink;
