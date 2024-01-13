"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

const SearchBox = () => {
  const router = useRouter();

  const [searchModal, setSearchModal] = React.useState(false);
  const [input, setInput] = React.useState("");

  React.useEffect(() => {
    if (searchModal) {
      const searchModalElement = document.getElementById("searchModal");
      if (searchModalElement) {
        searchModalElement.focus();
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSearchModal(false);
        } else if (e.key === "Enter") {
          router.push(`/search?q=${input}`);
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [input, router, searchModal]);
  return (
    <div className="h-10">
      {!searchModal ? (
        <button
          className="inline-block h-10 w-10 cursor-pointer rounded-full bg-primary p-2.5 text-xl text-white hover:bg-darkmode-secondary"
          onClick={() => {
            setSearchModal(!searchModal);
          }}
        >
          <AiOutlineSearch />
        </button>
      ) : (
        <div className="absolute top-4 left-6 right-6 ">
          <div
            className={`flex items-center z-10 h-10 bg-body opacity-0 transition rounded-full container p-0 dark:bg-black ${
              searchModal ? "visible opacity-100" : "invisible"
            }`}
          >
            <input
              type="text"
              className="h-full w-full border-0 px-4 text-lg bg-body placeholder:text-base rounded-s-full dark:bg-darkmode-body"
              id="searchModal"
              placeholder="Type and hit enter..."
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button onClick={() => setSearchModal(false)} className="p-3">
              <AiOutlineClose />
            </button>
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default SearchBox;
