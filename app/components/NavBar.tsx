import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import SearchBox from "./SearchBox";
import { AiOutlineFire } from "react-icons/ai";
import menu from "../../config/menu.json";

const NavBar = () => {
  const { links } = menu;

  return (
    <header className="flex border-b justify-center bg-slate-200">
      <nav className="flex space-x-6 px-6 py-4 justify-between container max-w-screen-xl items-center">
        <Link
          href="/"
          className="flex items-center text-xl text-primary font-bold"
        >
          <p>Blog</p>
          <AiOutlineFire />
        </Link>
        <ul className="hidden space-x-4 md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={`${href}${label}`}
              href={href}
              className="rounded-full px-6 py-2.5 text-left font-secondary text-[13.5px] capitalize  text-dark transition hover:bg-primary hover:text-white dark:text-darkmode-light md:px-3 md:py-3 lg:text-center xl:px-5"
            >
              {label}
            </Link>
          ))}
        </ul>
        <div className="flex space-x-2 items-center">
          <SearchBox />
          <DropdownMenu links={links} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
