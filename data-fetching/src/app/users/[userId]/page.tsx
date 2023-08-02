import fetchUser from "@/lib/fetchUser";
import fetchUserPost from "@/lib/fetchUserPost";
import { Metadata } from "next";
import { Suspense } from "react";
import PostCard from "./components/PostCard";
import fetchUserData from "@/lib/fetchUserData";
import { notFound } from "next/navigation";

type Props = {
  params: {
    userId: number;
  };
};

// To generate dynamic metadata so the page title is user's name
export async function generateMetadata({
  params: { userId },
}: Props): Promise<Metadata> {
  const userData: Promise<User> = fetchUser(userId);
  const user = await userData;

  if (!user) {
    return {
      title: "User Not Found",
    };
  }

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

  if (!user) {
    return notFound();
  }

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

export async function generateStaticParams() {
  const allUserData: Promise<User[]> = fetchUserData();
  const usersData = await allUserData;

  return usersData.map((user) => {
    return {
      userId: user.id.toString(),
    };
  });
}
