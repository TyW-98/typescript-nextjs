import formatDate from "@/lib/formatDate";
import Link from "next/link";

type Props = { post: BlogPost };

export default function PostList({ post }: Props) {
  const date = formatDate(post.date);
  return (
    <li className="dark:text-white/90 mt-4 text-2xl">
      <h5>
        <Link
          href={`/posts/${post.id}`}
          className="underline hover:text-yellow-500 dark:text-white"
        >
          {post.title}
        </Link>
      </h5>
      <p className="text-sm mt-1">{date}</p>
    </li>
  );
}
