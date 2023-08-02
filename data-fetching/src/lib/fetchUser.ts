export default async function fetchUser(Id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${Id}`);

  if (!res.ok) {
    return undefined;
  }

  return res.json();
}
