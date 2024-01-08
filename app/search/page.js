"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import DisplayData from "../_components/DisplayData";
import SearchSortInput from "../_components/SearchInput";

export default function Search() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const sort = searchParams.get("sort");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/users`);
      const data = await response.json();

      setData(data);
    };

    fetchData();
  }, [q, sort]);

  return (
    <div
      className="m-12

        "
    >
      <h1 className="text-4xl font-bold mb-4">Search Page</h1>

      <SearchSortInput />
      {q && (
        <h3 className="text-2xl font-bold mb-4">Search results for: {q}</h3>
      )}
      {sort && <p className="text-[14px] mb-4">Sorted by: {sort}</p>}
      <Suspense fallback={<div>Loading...</div>} key={q}>
        <DisplayData data={data} sort={sort} q={q} />
      </Suspense>
    </div>
  );
}
