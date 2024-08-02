import type { PostData } from "../content/content";

type PostProps = { post: PostData };

/**
 * Renders a single blog post with its content and author information.
 * @param post - The data of the blog post to be displayed.
 * @returns The JSX element representing the blog post.
 */
export function Post({ post }: PostProps) {
  return (
    <div className="text-black">
      {/* Container for the blog post */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-2xl font-semibold capitalize text-gray-800 lg:text-3xl dark:text-white">
            From the blog
          </h1>

          <div className="mt-8 flex flex-col items-center lg:-mx-6">
            {/* Image of the blog post */}
            <img
              className="h-72 w-full rounded-xl object-cover lg:mx-6 lg:h-96"
              src={post.postImage}
              alt=""
            />

            <div className="mt-6 lg:mx-6 lg:mt-0">
              {/* Date of the blog post */}
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {post.publishedDate.toLocaleDateString()}
              </p>

              {/* Title of the blog post */}
              <p className="text-xl font-semibold text-gray-800 dark:text-white">
                {post.title}
              </p>

              {/* Content of the blog post */}
              <p className="mt-3 text-sm text-gray-500 md:text-sm dark:text-gray-300">
                {post.content}
              </p>

              {/* Author information */}
              <div className="mt-6 flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover object-center"
                  src={post.authorImage}
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    {post.author}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
