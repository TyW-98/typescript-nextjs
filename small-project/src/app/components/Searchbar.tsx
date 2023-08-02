"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

export default function Searchbar() {
  const [search, setSerach] = useState("");
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setSerach("");
    router.push(`/${search}/`);
  }

  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(event) => setSerach(event.target.value)}
        className="bg-white p-2 w-80 text-xl rounded-xl"
        placeholder="Search"
      />
      <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
        🚀
      </button>
    </form>
  );
}
