"use client";

export default function DisplayData({ data, q, sort }) {
  const filteredData = () => {
    let newData = [...data];

    if (q) {
      newData = newData.filter(
        (item) =>
          item.name.toLowerCase().includes(q.toLowerCase()) ||
          item.username.toLowerCase().includes(q.toLowerCase())
      );
    }

    if (sort) {
      newData.sort((a, b) => {
        if (sort === "name") {
          return a.name.localeCompare(b.name);
        } else if (sort === "a-z") {
          return b.username.localeCompare(a.username);
        } else if (sort === "asc") {
          return a.id - b.id;
        } else if (sort === "desc") {
          return b.id - a.id;
        } else {
          return 0;
        }
      });
    }

    return newData;
  };

  return (
    <div className="flex flex-col items-center">
      <h1
        className="
        text-4xl font-semibold text-center mb-4 mt-8 mx-auto 
      "
      >
        My Feed
      </h1>
      <ul className="grid grid-cols-4 mx-auto max-w-[1260px] gap-10"></ul>
      {filteredData().map((item) => (
        <ul
          key={item.id}
          className="flex border border-gray-300 p-4 rounded w-[600px] mb-4 gap-4"
        >
          <h3 className="text-lg font-bold mb-2">{item.name}</h3>
          <p className="text-gray-500 font-semibold text-[16px]">
            Username: {item.username}
          </p>
          <p className="text-gray-500 font-semibold text-[16px]">
            Email: {item.email}
          </p>
        </ul>
      ))}
    </div>
  );
}
