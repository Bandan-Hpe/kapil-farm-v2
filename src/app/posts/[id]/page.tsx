interface props {
  params: {
    id: string;
  };
}
const page = async ({ params }: props) => {
  const res = await fetch(`https://dummyjson.com/post/${params.id}`);
  const post = await res.json();
  return (
    <main className="px-7 pt-24  text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </main>
  );
};

export default page;
