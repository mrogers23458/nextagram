import { useRouter } from "next/router";
import client from "../../utils/clients/apolloClient";
import { GET_ALL_POSTS } from "../../utils/queries/queries";

export default function UserName({ posts }) {
  console.log("props here", posts);
  const router = useRouter();
  const { username } = router.query;
  return (
    <div className="flex flex-col items-center">
      <h1>Welcome {username} </h1>
      {posts &&
        posts.map((post) => {
          return (
            <div className="flex flex-col items-center mt-4">
              <h2 className="font-bold text-lg">{post.title}</h2>
              <p>{post.content}</p>
            </div>
          );
        })}
    </div>
  );
}

export async function getServerSideProps(context) {
  const {
    data: { posts },
  } = await client.query({
    query: GET_ALL_POSTS,
  });
  console.log("data here", posts);
  return {
    props: { posts },
  };
}
