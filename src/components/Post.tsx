import type { PostData } from "../content/content";

type PostProps = { post: PostData };

export function Post({ post }: PostProps) {
  return <div className="text-black">Post</div>;
}
