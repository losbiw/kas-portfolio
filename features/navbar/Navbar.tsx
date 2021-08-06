// This module is an absolute mess and especially its animations, I'll need to refactor it later

import { FC, useState } from 'react';
import usePathname from '../../hooks/usePathname';
import Logo from './Logo';
import NavLink from './NavLink';
import Menu from '../../public/icons/menu.svg';

const links = ['', 'portfolio', 'contact'];

const Navbar: FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(true);
  const [styleClass, setStyleClass] = useState({ bottom: '100vh' });

  const pathname = usePathname();

  return (
    <nav className="container flex justify-between pt-10 sm:pt-16">
      <Logo bold="nefarious" thin=".kas" />

      <div
        className={
          `bottom-page flex justify-center w-screen z-20 flex-col h-screen left-0 bg-dark-grey bg-opacity-90 backdrop-filter 
          backdrop-blur-sm fixed items-center lg:static lg:justify-between lg:w-96 lg:bg-transparent lg:h-auto lg:flex-row`
        }
        style={{
          animation: isAnimating ? `appear 800ms forwards ${isClosing ? 'reverse' : ''}` : undefined,
          ...styleClass,
        }}
      >
        {
        links.map((link) => (
          <NavLink url={link} key={link} isActive={pathname === `/${link}`} />
        ))
      }
      </div>

      <button
        className="mr-10 lg:hidden z-30"
        aria-label="menu"
        type="button"
        onClick={() => {
          setIsAnimating(true);
          setStyleClass(isClosing ? { bottom: '100vh' } : { bottom: '0' });
          setIsClosing(!isClosing);

          setTimeout(() => {
            setStyleClass(!isClosing ? { bottom: '100vh' } : { bottom: '0' });
            setIsAnimating(false);
          }, 800);
        }}
      >
        <Menu className="w-7 h-7 fill-current text-gray-200" />
      </button>

      <div className="hidden lg:block" />
    </nav>
  );
};

export default Navbar;
