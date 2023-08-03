import formatDate from "@/lib/formatDate";
import { fetchPostData, fetchSortPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: {
    postId: string;
  };
};

export function generateMetadata({ params: { postId } }: Props) {
  const allPosts = fetchSortPostData();
  const findPost: BlogPost | undefined = allPosts.find(
    (post) => post.id === postId
  );

  if (!findPost) {
    return {
      title: `Topic Not Found`,
    };
  }

  return {
    title: findPost.title,
    description: `Page about ${findPost.title}`,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const allPosts = fetchSortPostData();
  const findPost: BlogPost | undefined = allPosts.find(
    (post) => post.id === postId
  );
  const post = await fetchPostData(postId);

  if (!findPost || !post) {
    return notFound();
  }

  const date = formatDate(post.date);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{post.title}</h1>
      <p className="mt-0 text-xl">{date}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        <Link href="/">Back to Homepage</Link>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  const allPosts = fetchSortPostData();

  return allPosts.map((post) => {
    return {
      postId: post.id,
    };
  });
}
