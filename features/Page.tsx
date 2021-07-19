import { FC } from 'react';
import Navbar from './navbar/Navbar';

const Page: FC = ({ children }) => (
  <div
    className="min-h-screen font-poppins flex items-center flex-col justify-between bg-top bg-cover text-gray-300"
    style={{ backgroundImage: 'url("/background.png")' }}
  >
    <Navbar />
    {children}
    <div />
  </div>
);

export default Page;
