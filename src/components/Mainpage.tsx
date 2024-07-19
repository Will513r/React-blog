import Willray from "../assets/Will.png";
import Mikelat from "../assets/Mike.png";
import Chrisf from "../assets/Chris.png";
import { PostPreview } from "./PostPreview";

const postOneImage =
  "https://bucket.material-tailwind.com/magic-ai/06b38f84f9669f766048c469ce861b81880378273a11ae9badaedfc32868ef44.jpg";
const postTwoImage =
  "https://bucket.material-tailwind.com/magic-ai/e7aa235a7bc5f504db1c66e27ece08f8118b1da6b21c013500391afcd572cf7d.jpg";
const postThreeImage =
  "https://bucket.material-tailwind.com/magic-ai/dc74a867f21afc734166a6d37c08beaba4ff040664ba8ccce918e054264ad68d.jpg";

const data = [
  {
    postImage: postOneImage,
    authorImage: Willray,
  },
  {
    postImage: postTwoImage,
    authorImage: Mikelat,
  },
  {
    postImage: postThreeImage,
    authorImage: Chrisf,
  },
];
export function Mainpage() {
  return (
    <main className="container m-0 flex h-[calc(100vh_-_12.5rem)] flex-col overflow-scroll bg-white p-4">
      {data.map((post) => {
        return <PostPreview post={post} />;
      })}
    </main>
  );
}
