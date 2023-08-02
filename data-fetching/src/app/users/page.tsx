import type { Metadata } from "next";
import fetchUserData from "@/lib/fetchUserData";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const userData: Promise<User[]> = fetchUserData();
  const users = await userData;
  return (
    <section>
      <h2>
        <Link href="/">Home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );
}
