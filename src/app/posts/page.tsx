import Link from "next/link";

const PostPage = async () => {
  const res = await fetch("https://dummyjson.com/post?limit=10");
  const data = await res.json();
  return (
    <main className="text-center padding pt-32 px-5">
      <h1 className="text-4xl  font-bold md:text-5xl mb-5">All Posts</h1>
      <ul>
        {data.posts.map((post: any) => (
          <li key={post.id} className="mb-5">
            <Link className="text-2xl font-bold" href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PostPage;
