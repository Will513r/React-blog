import type { PostData } from "../content/content";

type PostProps = { post: PostData };

export function Post({ post }: PostProps) {
  return (
    <main className="text-black">
      <h2 className="p-2 text-xl">{post.author}</h2>
      <h2 className="p-2">{new Date().toLocaleDateString()}</h2>
      <h2 className="p-2">{post.title}</h2>
      <em className="p-3 text-indigo-700">{post.content}</em>
      <h1 className="text p-4 text-5xl">What is Lorem Ipsum?</h1>
      {post.content}
    </main>
  );
}
