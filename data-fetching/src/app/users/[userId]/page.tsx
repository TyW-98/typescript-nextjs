import fetchUser from "@/lib/fetchUser";
import fetchUserPost from "@/lib/fetchUserPost";
import { Metadata } from "next";
import { Suspense } from "react";
import PostCard from "./components/PostCard";

type Props = {
  params: {
    userId: number;
  };
};

export async function generateMetadata({
  params: { userId },
}: Props): Promise<Metadata> {
  const userData: Promise<User> = fetchUser(userId);
  const user = await userData;

  return {
    title: user.name,
    description: `${user.name}'s page`,
  };
}

export default async function UserPage({ params: { userId } }: Props) {
  const userData: Promise<User> = fetchUser(userId);
  const postData: Promise<Post[]> = fetchUserPost(userId);

  // Without suspense method. (Show other content while the data is loading)
  // const [user, post] = await Promise.all([userData, postData]);

  const user = await userData;

  return (
    <>
      <h1>{user.name}</h1>
      <div>
        <h2>Comments</h2>
        <ul>
          {/* Use suspense to wait on the post data to load while showing the user name */}
          <Suspense fallback={<h2>Loading ....</h2>}>
            <PostCard promise={postData} />
          </Suspense>
        </ul>
      </div>
    </>
  );
}
