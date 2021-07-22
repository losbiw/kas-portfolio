import { FC } from 'react';
import usePathname from '../hooks/usePathname';
import Head from './Head';
import Navbar from './navbar/Navbar';

const Page: FC = ({ children }) => {
  const pathname = usePathname();

  return (
    <div>
      <Head />
      <div
        className="min-h-screen w-screen max-w-full overflow-hidden font-poppins overflow-x-hidden
        flex items-center flex-col justify-between bg-top bg-cover text-gray-200"
        style={{ backgroundImage: pathname === '/portfolio' ? 'url("/background.png")' : 'url("/background-desktop.png")' }}
      >
        <Navbar />
        {children}
        <div />
      </div>
    </div>
  );
};

export default Page;
