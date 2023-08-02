import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full mx-auto">
      <Image
        src="/images/dp.jpg"
        width={200}
        height={200}
        alt="Display Image"
        priority={true}
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
      />
    </section>
  );
}
