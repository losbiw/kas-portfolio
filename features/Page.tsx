import { FC } from 'react';
import Navbar from './navbar/Navbar';

const Page: FC = ({ children }) => (
  <div
    className="min-h-screen w-screen overflow-hidden font-poppins flex items-center flex-col justify-between bg-top bg-cover text-gray-200"
    style={{ backgroundImage: 'url("/background.png")' }}
  >
    <Navbar />
    {children}
    <div />
  </div>
);

export default Page;
