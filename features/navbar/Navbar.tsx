import { FC } from 'react';
import Logo from './Logo';
import NavLink from './NavLink';

const links = ['', 'portfolio', 'contact'];

const Navbar: FC = () => (
  <nav className="container flex justify-between pt-16">
    <Logo bold="nefarious" thin=".kas" />

    <div className="flex">
      {
        links.map((link) => (
          <NavLink url={link} key={link} />
        ))
      }
    </div>

    <div />
  </nav>
);

export default Navbar;
