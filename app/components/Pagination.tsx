import Link from "next/link";
import {
  HiMiniChevronDoubleLeft,
  HiMiniChevronDoubleRight,
  HiMiniChevronLeft,
  HiMiniChevronRight,
} from "react-icons/hi2";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center border-t bg-white py-3 gap-3">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <Link
          href={"#"}
          className="px-2 sm:px-3 py-2 text-sm font-medium text-text bg-white border border-gray-200 rounded-s-lg hover:bg-primary hover:text-white dark:bg-darkmode-primary dark:border-gray-600 dark:text-white dark:hover:text-darkmode-primary dark:hover:bg-body flex items-center"
        >
          <HiMiniChevronDoubleLeft />
        </Link>
        <Link
          href={"#"}
          className="px-2 sm:px-3 py-2 text-sm font-medium text-text bg-white border border-gray-200 hover:bg-primary hover:text-white dark:bg-darkmode-primary dark:border-gray-600 dark:text-white dark:hover:text-darkmode-primary dark:hover:bg-body flex items-center"
        >
          <HiMiniChevronLeft />
        </Link>
        <div className="px-2 sm:px-3 py-2 text-sm font-medium text-text bg-white border border-gray-200 dark:bg-darkmode-primary dark:border-gray-600 dark:text-white flex items-center cursor-pointer">
          <p className="text-sm text-gray-700">
            Page <span className="font-medium">1</span> of{" "}
            <span className="font-medium">10</span>
          </p>
        </div>
        <Link
          href={"#"}
          className="px-2 sm:px-3 py-2 text-sm font-medium text-text bg-white border border-gray-200 hover:bg-primary hover:text-white dark:bg-darkmode-primary dark:border-gray-600 dark:text-white dark:hover:text-darkmode-primary dark:hover:bg-body flex items-center"
        >
          <HiMiniChevronRight />
        </Link>
        <Link
          href={"#"}
          className="px-2 sm:px-3 py-2 text-sm font-medium text-text bg-white border border-gray-200 rounded-e-lg hover:bg-primary hover:text-white dark:bg-darkmode-primary dark:border-gray-600 dark:text-white dark:hover:text-darkmode-primary dark:hover:bg-body flex items-center"
        >
          <HiMiniChevronDoubleRight />
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
