import type { PostData } from "../content/content";

type PostProps = { post: PostData };

import { useState } from "react";

/**
 * Renders a single blog post with its content and author information.
 * @param post - The data of the blog post to be displayed.
 * @returns The JSX element representing the blog post.
 */
export function Post({ post }: PostProps) {
  // State to keep track of whether the full content is visible or not.
  const [isContentVisible, setContentVisible] = useState(false);

  /**
   * Toggles the visibility of the full content.
   */
  const toggleContentVisibility = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <div className="text-black">
      {/* Container for the blog post */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">From the blog</h1>

          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            {/* Image of the blog post */}
            <img
              className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
              src={post.postImage}
              alt=""
            />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
              {/* Date of the blog post */}
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {post.publishedDate.toLocaleDateString()}
              </p>

              {/* Title of the blog post */}
              <p>{post.title}</p>
 

              {/* Content of the blog post */}
              {isContentVisible && (
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  {post.content}
                </p>
              )}

              {/* Button to show the full content */}
              <button
                onClick={toggleContentVisibility}
                className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
              >
                Read more
              </button>

              {/* Author information */}
              <div className="flex items-center mt-6">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src={post.authorImage}
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">{post.author}</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
