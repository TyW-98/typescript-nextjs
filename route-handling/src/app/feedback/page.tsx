"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

export default function Feedback() {
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const router = useRouter();

  function handleInputText(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFeedbackData((prevFeedbackData) => {
      return {
        ...prevFeedbackData,
        [name]: value,
      };
    });
  }

  async function submitFeedbackData(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { name, email, message } = feedbackData;

    // Send data to API
    const res = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const result = await res.json();
    // Navigate to thank you route
    router.push("/thank-you/");
  }

  return (
    <form
      onSubmit={submitFeedbackData}
      className="flex flex-col mx-auto max-w-3xl p-6"
    >
      <h1 className="text-4xl mb-4">Contact Us</h1>
      <label htmlFor="name" className="text-2xl mb-1">
        Name:
      </label>
      <input
        type="text"
        id="name"
        placeholder="Jane"
        name="name"
        value={feedbackData.name}
        autoFocus
        onChange={handleInputText}
        className="p-3 mb-6 text2xl rounded-2xl text-black"
        required
      />
      <label htmlFor="email" className="text-4xl mb-4">
        Email:
      </label>
      <input
        type="email"
        id="email"
        placeholder="email@email.com"
        name="email"
        value={feedbackData.email}
        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        onChange={handleInputText}
        className="p-3 mb-6 text2xl rounded-2xl text-black"
        required
      />
      <label htmlFor="message" className="text-4xl mb-4">
        Message:
      </label>
      <textarea
        className="p-3 mb-6 text-2xl rounded-2xl text-black"
        id="message"
        name="message"
        placeholder="Your message here..."
        rows={5}
        cols={55}
        value={feedbackData.message}
        onChange={handleInputText}
      />
      <button className="p-3 mb-6 text-2xl rounded-2xl text-black border-solid border-white border-2 max-w-xs bg-slate-400 hover:cursor-pointer hover:bg-slate-300 disabled:hidden">
        Submit
      </button>
    </form>
  );
}
