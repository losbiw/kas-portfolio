import { FC } from 'react';
import { useRouter } from 'next/router';
import Navbar from './navbar/Navbar';

const Page: FC = ({ children }) => {
  const router = useRouter();

  return (
    <div
      className="min-h-screen w-screen max-w-full overflow-hidden font-poppins overflow-x-hidden flex items-center flex-col justify-between bg-top bg-cover text-gray-200"
      style={{ backgroundImage: router.pathname === '/portfolio' ? 'url("/background.png")' : 'url("/background-desktop.png")' }}
    >
      <Navbar />
      {children}
      <div />
    </div>
  );
};

export default Page;
