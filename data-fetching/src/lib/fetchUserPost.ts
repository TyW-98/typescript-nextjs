export default async function fetchUserPost(id: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  if (!res.ok) throw new Error("Failed to fetch User Post data");

  return res.json();
}
