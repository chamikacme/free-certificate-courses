"use client";

import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface DropdownMenuProps {
  links: { href: string; label: string }[];
}

const DropdownMenu = ({ links }: DropdownMenuProps) => {
  const [dropdownMenu, setDropdownMenu] = React.useState(false);
  return (
    <>
      <button
        className="md:hidden inline-block h-10 w-10 cursor-pointer rounded-full bg-primary p-2.5 text-xl text-white hover:bg-darkmode-secondary"
        onClick={() => setDropdownMenu(!dropdownMenu)}
      >
        {!dropdownMenu ? <AiOutlineMenu /> : <AiOutlineClose />}
      </button>

      {dropdownMenu && (
        <div className="bg-body absolute top-16 -left-2 w-full p-6 mt-2 md:hidden">
          <ul className="flex flex-col space-y-2 container">
            {links.map(({ href, label }) => (
              <li
                key={`${href}${label}`}
                className="rounded-full px-6 py-2.5 font-secondary text-[13.5px] text-center capitalize  text-dark transition hover:bg-primary hover:text-white dark:text-darkmode-light md:px-3 md:py-3 lg:text-center xl:px-5"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default DropdownMenu;
