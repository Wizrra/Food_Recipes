import { TextAlignEnd } from "lucide-react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="text-center py-4 shadow-md flex items-center justify-between px-4 sticky top-0 bg-white">
      <h1 className="logo font-bold  text-3xl text-green-800 ">My Food</h1>
      <TextAlignEnd
        onClick={() => setOpenNav(!openNav)}
        className="md:hidden"
      />
      <Sidebar isNavOpen={openNav} />
      {/* DESKTOP NAVBAR */}
      <nav className="hidden md:block">
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
