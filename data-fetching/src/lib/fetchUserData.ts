export default async function fetchUserData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data from API");
  }

  return res.json();
}
