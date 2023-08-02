export default async function fetchUser(Id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${Id}`);

  if (!res.ok) throw new Error("Failed to fetch user data");

  return res.json();
}
