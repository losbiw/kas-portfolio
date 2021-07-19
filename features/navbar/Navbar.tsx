import { useRouter } from 'next/router';
import { FC } from 'react';
import Logo from './Logo';
import NavLink from './NavLink';
import Menu from '../../public/icons/menu.svg';

const links = ['', 'portfolio', 'contact'];

const Navbar: FC = () => {
  const router = useRouter();

  return (
    <nav className="container flex justify-between pt-10 sm:pt-16">
      <Logo bold="nefarious" thin=".kas" />

      <div className="hidden lg:flex justify-between w-96">
        {
        links.map((link) => (
          <NavLink url={link} key={link} isActive={router.pathname === `/${link}`} />
        ))
      }
      </div>

      <button className="mr-10 lg:hidden" type="button">
        <Menu className="w-7 h-7 fill-current text-gray-200" />
      </button>

      <div className="hidden lg:block" />
    </nav>
  );
};

export default Navbar;
