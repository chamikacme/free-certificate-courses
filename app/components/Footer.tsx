import Link from "next/link";
import { AiOutlineFire } from "react-icons/ai";
import menu from "../../config/menu.json";

const Footer = () => {
  const { footer_links } = menu;
  return (
    <div className="bg-dark">
      <div className="container max-w-screen-xl">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center text-xl text-primary font-bold"
            >
              <p>Blog</p>
              <AiOutlineFire />
            </Link>
            <ul className="flex flex-col sm:flex-row flex-wrap sm:items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              {footer_links.map(({ href, label }) => (
                <Link
                  key={`${href}${label}`}
                  href={href}
                  className="rounded-full pe-6 sm:px-6 py-2.5 text-left capitalize text-white transition hover:underline dark:text-darkmode-light md:px-3 md:py-3 lg:text-center xl:px-5"
                >
                  {label}
                </Link>
              ))}
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Blog™. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
