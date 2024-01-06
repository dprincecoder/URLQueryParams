import { NextResponse } from "next/server";

async function fetchUsers() {
  const baseUrl = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(baseUrl);
  const data = await response.json();

  return data;
}

export async function GET(request) {
  const posts = await fetchUsers();

  return NextResponse.json(posts);
}
