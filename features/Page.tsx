import { FC } from 'react';
import Navbar from './navbar/Navbar';

const Page: FC = ({ children }) => (
  <div className="min-h-screen font-poppins flex items-center flex-col justify-between">
    <Navbar />
    {children}
    <div />
  </div>
);

export default Page;
