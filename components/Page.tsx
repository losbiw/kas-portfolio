import { FC } from "react";
import Navbar from "./Navbar";

const Page: FC = ({ children }) => (
  <div className="min-h-screen font-poppins flex items-center flex-col">
    <Navbar />
    {children}
  </div>
);

export default Page;