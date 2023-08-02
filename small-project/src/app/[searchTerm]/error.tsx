"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 px-4 min-h-screen">
      <h2 className="my-4 text-2xl font-bold">Something went wrong!</h2>
      <button
        className="mb-4 p-4 bg-red-500 text-white rounded-xl"
        onClick={() => reset()}
      >
        Try again
      </button>
      <p className="text-xl">
        or go back{" "}
        <Link href="/" className="underline">
          🏠
        </Link>
      </p>
    </main>
  );
}
