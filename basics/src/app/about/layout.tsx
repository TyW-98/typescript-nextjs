import React from "react";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About page of the company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About Page</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
