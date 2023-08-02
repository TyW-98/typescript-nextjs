import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
      <p>
        <Link href="/users">Users</Link>
      </p>
    </main>
  );
}
