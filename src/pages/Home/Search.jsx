import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

function Search() {
  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: handle search redirect
  };
  return (
    <form
      className="pt-1 max-w-xl mx-auto flex flex-col items-center"
      onSubmit={handleSearch}
    >
      <div className="h-12 border-2 rounded-full w-full overflow-hidden hover:shadow-my active:shadow-my focus-within:shadow-my">
        <div className="pl-4 pt-1 pr-1 flex h-full">
          <div className="flex items-center justify-center pr-4 -mt-1">
            <SearchIcon className="w-5 h-5" />
          </div>
          <input
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            autoFocus
            type="text"
            name="query"
            id="query"
            className="flex-grow p-0 m-0 outline-none h-9 text-base pr-4"
          />
        </div>
      </div>
      <div className="pt-5 ">
        <button
          type="submit"
          className="my-3 mx-1 px-4 py-3 rounded leading-4 bg-slate-100 border-2 border-white hover:shadow hover:border-gray-200 active:shadow active:border-gray-200 focus:shadow focus:border-blue-400"
        >
          Wikipedia Search
        </button>
      </div>
    </form>
  );
}

export default Search;
