import React from "react";

type Props = {
  promise: Promise<Post[]>;
};

export default async function PostCard({ promise }: Props) {
  const post = await promise;
  return (
    <ul>
      {post.map((item) => {
        return (
          <li key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </li>
        );
      })}
    </ul>
  );
}
