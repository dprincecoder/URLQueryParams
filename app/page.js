"use client";
import { Suspense, useEffect, useState } from "react";
import DisplayData from "./_components/DisplayData";
import SearchSortInput from "./_components/SearchInput";

export default function Home() {
  const [data, setData] = useState([]);
  const fetchPosts = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="m-12">
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <SearchSortInput />
      <Suspense fallback={<div>Loading...</div>}>
        <DisplayData data={data} />
      </Suspense>
    </div>
  );
}
