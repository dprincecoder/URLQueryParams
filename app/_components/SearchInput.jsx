"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { useMemo } from "react";
const SearchSortInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams?.get("q");
  const sort = searchParams?.get("sort");

  const newParams = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const val = event.target;
    const search = val.search;
    const sortBy = val.sort;
    console.log(newParams, search.value, sortBy.value);
    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }
    if (sortBy.value) {
      newParams.set("sort", sortBy.value);
    } else {
      newParams.delete("sort");
    }
    router.push(`/search?${newParams.toString()}`);
  };

  return (
    <div className="flex items-center space-x-4 mb-4">
      <button
        onClick={() => router.push("/")}
        className="border border-gray-300 p-2 rounded text-black border-black"
      >
        Home
      </button>

      <form
        onSubmit={handleSubmit}
        className="
        flex items-center space-x-4 mb-4 mx-auto
      "
      >
        <input
          type="text"
          placeholder="Search..."
          name="search"
          key={query || ""}
          // value={searchTerm}
          defaultValue={query || ""}
          // onChange={handleSearch}
          className="border border-gray-300 p-2 rounded text-black border-black"
        />
        <button
          type="submit"
          className="border border-gray-300 p-2 rounded text-black border-black"
        >
          Search
        </button>
        <div className="flex gap-2 items-center">
          <p>Sort by:</p>

          <select
            defaultValue={sort || "default"}
            name="sort"
            onChange={(e) => {
              newParams.set("sort", e.target.value);
              router.push(`/search?${newParams.toString()}`);
            }}
            className="border border-gray-300 p-2 rounded"
          >
            <option value="default">Default</option>
            <option value="title">Name</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
            <option value="a-z">A to Z</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default SearchSortInput;
